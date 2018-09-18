import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import * as jwt_decode from 'jwt-decode';

const TOKEN_NAME = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private dataStorageService: DataStorageService) { }

  getToken(): string {
    return this.dataStorageService.getItem(TOKEN_NAME);
  }

  setToken(newToken: string) {
    if (!this.isTokenExpired(newToken)) {
      this.dataStorageService.setItem(TOKEN_NAME, newToken);
    }
  }

  isTokenExpired(token?: string): boolean {
    token = token ? token : this.getToken();
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
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

  removeToken() {
    this.dataStorageService.removeItem(TOKEN_NAME);
  }
}
