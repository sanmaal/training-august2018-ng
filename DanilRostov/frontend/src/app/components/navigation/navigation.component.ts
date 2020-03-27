import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  defaultSignInValue = 'Sign In';
  isShow = true;

  constructor(
    private modalsService: ModalsService,
    private userService: UserService,
    private tokenService: TokenService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onDropDownToggle() {
    this.toggleDropDown();
  }

  onSingInModalToggle() {
    this.modalsService.singInModalToggle();
    this.toggleDropDown();
  }

  onSingUpModalToggle() {
    this.modalsService.singUpModalToggle();
    this.toggleDropDown();
  }

  toggleDropDown() {
    const dropDownElement = document.getElementById('dropdown');
    dropDownElement.classList.toggle('dropdown-content-active');
  }

  onLogOut() {
    this.toggleDropDown();
    this.authService.logOut(this.defaultSignInValue);
  }
}
