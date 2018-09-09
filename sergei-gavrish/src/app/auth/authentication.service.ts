import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signUp(login: string, password: string): Observable<User> {
    const body = new HttpParams()
      .set('login', login)
      .set('password', password);
    return this.http.post<User>('http://localhost:3000/users/signup', body, httpOptions);
  }

  signIn(login: string, password: string): Observable<User> {
    const body = new HttpParams()
      .set('login', login)
      .set('password', password);
    return this.http.post<User>('http://localhost:3000/users/login', body, httpOptions);
  }

}
