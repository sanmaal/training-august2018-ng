import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../../shared/session.service';
import { User, NewUser } from './user';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorService } from '../../shared/error.service';
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
    private errorService: ErrorService
  ) { }

  private authQuery (queryName: string, body: object) {
    return this.http.post<any>(`${environment.host}${queryName}`, body, httpOptions)
      .pipe(
        tap(res => {
          this.sessionService.logIn(res.token);
        }),
        catchError(this.errorService.handleError())
      );
  }

  register(newUser: NewUser): Observable<any> {
    return this.authQuery('register', newUser);
  }

  login(user: User): Observable<any> {
    return this.authQuery('login', user);
  }

}
