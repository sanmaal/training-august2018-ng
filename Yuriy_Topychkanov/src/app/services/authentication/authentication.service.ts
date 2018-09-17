import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  constructor(private http: HttpClient, private router: Router) {
  }

  public saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
    this.isLoggedIn$().next(true);
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.isLoggedIn$().next(false);
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  public getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[ 1 ];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  private isUserLoggedIn() {
    const user = this.getUserDetails();
    return user ? user.exp > Date.now() / 1000 : false;

  }

  public isLoggedIn$(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  public request(base): Observable<any> {
    this.isLoggedIn$().next(this.isUserLoggedIn());
    const request = base.pipe(
      map((data: any) => {

        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

}
