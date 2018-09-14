import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthResult } from "./domain/AuthResult";


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerRequest = 'http://localhost:3000/users/registration';
  loginRequest = 'http://localhost:3000/users/login';
  checkTokenRequest = 'http://localhost:3000/users/check-token';

  isAuth: boolean = false;  

  public register (name, email, password) {
    this.http.post<AuthResult>(this.registerRequest, {name, email, password})
      .subscribe(res => {
        this.setToken(res.token);
        this.router.navigate([''])
      });
  }

  public login (email, password) {
    this.http.post<AuthResult>(this.loginRequest, {email, password})
      .subscribe(res => {
        this.setToken(res.token);
        this.router.navigate([''])
      }, err => console.log(err));
  }

  public checkAuth() {
    return this.isAuth;
  }

  public logOut() {
    this.removeToken();
    this.isAuth = false;
  }

  private setToken(token) {
    this.isAuth = true;
    localStorage.setItem('token', token);
  }

  private getToken() {
    return localStorage.getItem('token');
  }

  private removeToken() {
    localStorage.removeItem('token');
  }


  public checkToken() {
    this.http.post(this.checkTokenRequest, {}, this.getOptions()).subscribe(
      res => this.isAuth = true, error =>  this.isAuth = false
    )
  }

  public setOptions() {

  }

  public getOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access-token': this.getToken()
      })}
  }

  public getUserId() {
    const payload =  this.getToken().split('.')[1];
    return JSON.parse(atob(payload)).id;
  }
}
