import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;
    console.log('AuthGuard#canActivate called');
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.service.isLoggedIn) { return true; }

    this.service.redirectUrl = url;

    this.router.navigate(['/pokemons']);
    return false;
  }

}
