import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../../shared/session.service';
import { User, NewUser } from './user';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
  ) { }

  register(newUser: NewUser): Observable<any> {
    return this.http.post<any>(`${environment.host}register`, newUser, httpOptions)
      .pipe(
        tap(res => {
          this.sessionService.logIn(res.token);
        }),
        catchError(this.handleError<any>())
      );
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${environment.host}login`, user, httpOptions)
      .pipe(
        tap(res => {
          this.sessionService.logIn(res.token);
        }),
        catchError(this.handleError<any>())
      );
  }

  private handleError<T> () {
    return (error: any): Observable<any> => {
      if (error.error.error) {
        return of(error.error);
      } else {
        return of({error: 'Something wrong was happen. Please try again.'});
      }
    };
  }

}
