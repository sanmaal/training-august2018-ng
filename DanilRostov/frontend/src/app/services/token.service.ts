import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token) {
    localStorage.setItem('access_token', token);
  };
}
