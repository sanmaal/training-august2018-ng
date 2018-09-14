import { Component, OnInit } from '@angular/core';
import { UserFormsService } from "../services/user-forms/user-forms.service";
import { AuthenticationService } from "../services/authentication/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  location: string = document.location.pathname;
  isLoggedIn: boolean = false;


  constructor(private formsService: UserFormsService, private auth: AuthenticationService) {
  }

  toggleForm(name) {
    this.formsService.filter(name);
  }

  userLogout() {
    this.auth.logout();
  }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

}
