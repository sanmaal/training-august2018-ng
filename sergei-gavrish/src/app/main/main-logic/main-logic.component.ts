import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main-logic',
  template: `
    <app-main-view
      [isLoggedIn]="auth.isLoggedIn$ | async"
      (logoutClick)="logout()"
    ></app-main-view>
  `,
})
export class MainLogicComponent {
  @Input() isLoggedIn$: Observable<boolean>;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/pokemons']);
  }

}
