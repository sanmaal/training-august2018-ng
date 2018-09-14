import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:5000';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  login(credentials): Observable<any>{
    return this.http.post<any>(this.baseUrl + '/registration' , credentials, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
