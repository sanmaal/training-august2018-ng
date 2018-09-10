import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { take, map } from '../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      const url: string = state.url;
      return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> {
    return this.service.isLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (
            isLoggedIn &&
            new Date(JSON.parse(localStorage.getItem('expiresAt'))).getTime()
          ) {
            return true;
          } else {
            this.router.navigate(['/signIn']);
            return false;
          }
        })
      );
  }

}
