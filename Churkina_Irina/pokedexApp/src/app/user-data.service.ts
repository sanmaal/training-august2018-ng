import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { environment } from "../environments/environment";
import { tap } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";
import { NotifyService } from "./notify.service";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  user: User;

  private apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  loginUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/login`, user, this.httpOptions)
      .pipe(
        tap(res => {
          if (res.token) {
            this.cookieService.set("currToken", res.token);
            this.notify.success(
              "You just have logged in. Let's search for some pokemons.",
              { reload: true, path: "/list" }
            );
          } else {
            this.notify.warning(
              "Something is wrong :( Probably you should sign ul first :) "
            );
          }
        })
      );
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/newUser`, user, this.httpOptions)
      .pipe(
        tap(res => {
          if (res.userCreated) {
            this.notify.success(
              "You are with us now! Feel free to Sign In and start catching pokemons!",
              { reload: true }
            );
          } else {
            this.notify.warning("Maybe you alreade have an account?");
          }
        })
      );
  }

  logout() {
    this.cookieService.delete("currToken");
    this.notify.warning("You've just logged out. The page will be reloaded", {
      reload: true
    });
  }

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private notify: NotifyService
  ) {}
}
