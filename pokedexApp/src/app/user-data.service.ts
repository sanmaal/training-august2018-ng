import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  user: User;

  private apiUrl = "http://localhost:3000/api";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, user, this.httpOptions);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/newUser`, user, this.httpOptions);
  }

  constructor(private http: HttpClient) {}
}
