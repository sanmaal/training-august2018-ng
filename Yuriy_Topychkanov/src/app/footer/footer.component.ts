import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication/authentication.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
  private isLoggedIn: boolean = false;
  subscription: Subscription;

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.subscription = this.auth.isLoggedIn$().subscribe((data: boolean) => this.isLoggedIn = data)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
