import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main-logic',
  templateUrl: './main-logic.component.html',
  styleUrls: ['./main-logic.component.css']
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
