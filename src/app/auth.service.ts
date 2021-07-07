import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { tap } from '../../node_modules/rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = false;

  constructor(private http: HttpClient) { }

  get getAuth() {
    // console.log(this.auth);
    return this.auth;
  }

  login(name: string, password: string): Observable<Object> {
    console.log({name, password});
    return this.http.post<User>('http://localhost:3000/api/auth/login', {name, password}, httpOptions)
      .pipe(tap((data: any) => {
        if (data.auth) {
          this.auth = true;
        }}));
  }

  singin(name: string, password: string) {
    console.log({name, password});
    return this.http.post<User>('http://localhost:3000/api/auth/login', {name, password}, httpOptions);
  }

  logout() {
    console.log('logout');
    return this.http.get<User>('http://localhost:3000/api/auth/logout')
      .pipe(tap((data: any) => {
        if (!data.auth) {
          this.auth = false;
        }
      }));
  }
}
