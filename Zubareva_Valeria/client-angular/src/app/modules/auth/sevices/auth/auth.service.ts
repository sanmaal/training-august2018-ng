import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResult } from '../../../../domain/AuthResult';

@Injectable()
export class AuthService {

  registerRequest = 'http://localhost:5000/api/auth/register';
  loginRequest = 'http://localhost:5000/api/auth/login';
  checkTokenRequest = 'http://localhost:5000/api/auth/check-token';

  isAuth: boolean = false;

  constructor(private http: HttpClient) { }

  public register (name, email, password) {
    return this.http.post<AuthResult>(this.registerRequest, {name, email, password})
  }

  public login (email, password) {
    return this.http.post<AuthResult>(this.loginRequest, {email, password})
  }

  public checkAuth() {
    return this.isAuth;
  }

  public logOut() {
    this.removeToken();
    this.isAuth = false;
  }

  public setToken(token) {
    localStorage.setItem('token', token);
    this.isAuth = true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  private removeToken() {
    localStorage.removeItem('token');
  }

  public checkToken() {
    return this.http.post(this.checkTokenRequest, {}, {headers: {'access-token': this.getToken()}})
      .toPromise()
      .then(() => this.isAuth = true)
      .catch(error => {
        this.isAuth = false;
      });
  }
}
