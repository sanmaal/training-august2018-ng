import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from './session.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private sessionService: SessionService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | BehaviorSubject<boolean> {
    return this.sessionService.isAuthenticated;
  }
}
