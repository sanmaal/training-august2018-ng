import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResult } from "./domain/AuthResult";
import { log } from 'util';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private usersUrl: string = 'http://localhost:3000/users';

  isAuth: boolean = false;  

  public register (username, email, password) {
    return this.http.post<AuthResult>(`${ this.usersUrl }/registration`, {username, email, password})
  }

  public login (email, password) {
    return this.http.post<AuthResult>(`${ this.usersUrl }/login`, {email, password})
  }

  public checkAuth() {
    return this.isAuth;
  }

  public logOut() {
    this.removeToken();
    this.isAuth = false;
  }

  public setToken(token) {
    this.isAuth = true;
    localStorage.setItem('token', token);
  }

  public getToken() {
    console.log(localStorage);
    return localStorage.getItem('token');
  }

  public removeToken() {
    localStorage.removeItem('token');
  }

  public checkToken() {
    return this.http.post(`${ this.usersUrl }/check-token`, {}, {headers: {'access-token': this.getToken()}})
      .toPromise()
      .then(() => this.isAuth = true)
      .catch(error => {
        this.isAuth = false;
      });
  }
}
