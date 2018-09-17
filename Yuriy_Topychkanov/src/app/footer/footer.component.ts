import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication/authentication.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
  private isLoggedIn: boolean = false;

  constructor(private auth: AuthenticationService) {
    this.auth.isLoggedIn$().subscribe((data: boolean) => this.isLoggedIn = data)
  }

  ngOnInit() {
  }

}
