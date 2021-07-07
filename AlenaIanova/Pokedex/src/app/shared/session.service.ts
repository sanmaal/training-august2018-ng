import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  _isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private tokenService: TokenService) {}

  get isAuthenticated(): boolean {
    return this._isAuthenticated.getValue();
  }

  set isAuthenticated(newValue: boolean) {
    if (this.isAuthenticated !== newValue) {
      this._isAuthenticated.next(newValue);
    }
  }

  logIn(token: string) {
    this.tokenService.setToken(token);
    this.isAuthenticated = true;
  }

  checkLogIn() {
    this.isAuthenticated = !this.tokenService.isTokenExpired();
  }

  logOut() {
    this.tokenService.removeToken();
    this.isAuthenticated = false;
  }

}
