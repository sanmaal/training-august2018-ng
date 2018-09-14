import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Auth } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(data) {
    const url = 'http://localhost:5000/register';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Auth>(url, data, httpOptions)
      .pipe(map(res => res));
  }

  signIn(data) {
    const url = 'http://localhost:5000/login';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Auth>(url, data, httpOptions)
      .pipe(map(res => {
        if(res.isAuth) {

        }
      }));
  }

  
}
