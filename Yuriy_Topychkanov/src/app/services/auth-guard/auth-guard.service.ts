import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "../authentication/authentication.service";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  subscription: Subscription;

  constructor(private auth: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let authorized: boolean = false;
    this.subscription = this.auth.isLoggedIn$().subscribe((data: boolean) => authorized = data);
    return authorized;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
