import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Auth } from '../models/Auth';
import { User } from '../models/User';
import { BASE_URL } from '../constants/api';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(
    private http: HttpClient, 
    private userService: UserService,
    private tokenService: TokenService,
  ) { }

  signIn(data) {
    const url = `${BASE_URL}/login`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Auth>(url, data, httpOptions)
      .pipe(map(res => {
        if (res.isAuth) {
          this.tokenService.setToken(res.token);
          this.authorize(res.token).subscribe();
        } else {
          alert(res.error);
        }
      }));
  }

  signUp(data) {
    const url = `${BASE_URL}/register`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Auth>(url, data, httpOptions)
      .pipe(map(res => {
        if (res.isAuth) {
          this.tokenService.setToken(res.token);
          this.authorize(res.token).subscribe();
        } else {
          alert(res.error);
        }
      }));
  }

  authorize(token) {
    const url = `${BASE_URL}/authorize`;
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'x-token': token
      })
    };
    return this.http.get<User>(url, httpOptions)
      .pipe(map(res => {
        if (res.isAuth) {
          this.isAuth = true;
          this.userService.setUserName(res.name);
          alert(`Hello ${res.name}`);
        } else {
          this.isAuth = false;
          this.tokenService.removeToken();
        }        
      }));
  }

  logOut(defaultSignInValue) {
    this.userService.setUserName(defaultSignInValue);
    this.tokenService.removeToken();
    this.isAuth = false;
  }

  checkToken() {
    const token = this.tokenService.getToken();
    if (token) {
      this.authorize(token).subscribe();
    }
  }
}
