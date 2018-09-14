import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject} from 'rxjs';

export const TOKEN_NAME = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() {}

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(newToken: string) {
    if (!this.isTokenExpired(newToken)) {
      localStorage.setItem(TOKEN_NAME, newToken);
      this.isAuthenticated.next(true);
    }
  }

  isTokenExpired(token?: string): boolean {
    token = token ? token : this.getToken();
    if (!token) {
      this.isAuthenticated.next(false);
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      this.isAuthenticated.next(false);
      return false;
    }
    this.isAuthenticated.next(date.valueOf() > new Date().valueOf());
    return !(date.valueOf() > new Date().valueOf());
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  getUserInfo(): Object {
    const decoded = jwt_decode(this.getToken());
    if (!decoded) {
      return {};
    }
    return decoded;
  }

  logOut() {
    localStorage.removeItem(TOKEN_NAME);
    this.isAuthenticated.next(false);
  }

}
