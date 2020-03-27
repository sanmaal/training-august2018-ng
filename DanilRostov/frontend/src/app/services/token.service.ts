import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token) {
    localStorage.setItem('access_token', token);
  };

  removeToken() {
    localStorage.removeItem('access_token');
  };

  getToken() {
    return localStorage.getItem('access_token');
  }
}
