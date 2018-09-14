import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main-logic',
  template: '<app-main-view *ngLet="isLoggedIn$ | async as isLoggedIn" [isLoggedIn]="isLoggedIn" (logoutClick)="logout()"></app-main-view>',
})
export class MainLogicComponent implements OnInit {
  @Input() isLoggedIn$: Observable<boolean>;

  constructor(private service: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.service.isLoggedIn$;
  }

  logout(): void {
    this.service.logout();
    // TODO: redirect
  }

}
