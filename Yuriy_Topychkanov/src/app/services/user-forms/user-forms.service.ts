import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "../authentication/authentication.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root',
})

export class UserFormsService {
  private _listners = new Subject<any>();


  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  registerUser(formData: object) {
    return this.auth.request(this.http.post(`http://localhost:3000/user/register`, formData, httpOptions));
  }

  authorizeUser(formData: object) {
    return this.auth.request(this.http.post(`http://localhost:3000/user/login`, formData, httpOptions));
  }

}
