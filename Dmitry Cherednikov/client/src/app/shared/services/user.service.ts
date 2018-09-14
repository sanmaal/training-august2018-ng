import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: any = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));

  userEmitChange(user: any) {
    this.user.next(user);
  }
  
  _uri = 'http://localhost:3001/api/auth'
  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  signup(user: User) {
    return this.http.post(`${this._uri}/signup`, user, this._httpOptions);
  }

  login(user: User) {
    return this.http.post(`${this._uri}/login`, user, this._httpOptions);
  }

  logout() {
    localStorage.clear();
    this.userEmitChange(null)
    if (this.router.url === '/catched-pokemons') {
      this.router.navigate(['/']);
    }
  }
}
