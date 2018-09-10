import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap, delay} from 'rxjs/operators';

import { User } from './auth/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  redirectUrl: string;

  get isLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) { }

  signIn(login: string, password: string) {
    const body = new HttpParams()
      .set('login', login)
      .set('password', password);
    return this.http.post<User>('http://localhost:3000/users/login', body, httpOptions)
      .pipe(
        delay(1000),
        tap(response => {
          this.loggedIn.next(true);
          this.setSession(response);
        })
      );
  }

  signUp(login: string, password: string): Observable<User> {
    const body = new HttpParams()
      .set('login', login)
      .set('password', password);
    return this.http.post<User>('http://localhost:3000/users/signup', body, httpOptions);
  }

  private setSession(response): void {
    const expiresAt = new Date(Date.now() + response.expiresIn * 1000);
    localStorage.setItem('tokenId', response.tokenId);
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt));
  }

  logout(): void {
    localStorage.removeItem('tokenId');
    localStorage.removeItem('expiresAt');
    this.loggedIn.next(false);
  }

}
