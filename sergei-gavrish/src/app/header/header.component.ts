import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';
import { take, map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() isLoggedIn$: Observable<boolean>;

  constructor(private service: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.service.isLoggedIn;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.isLoggedIn$ = this.service.isLoggedIn;    
  }

  logout(): void {
    this.service.logout();
  }

}
