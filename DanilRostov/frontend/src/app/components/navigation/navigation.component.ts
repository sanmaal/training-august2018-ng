import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private modalsService: ModalsService,
    private userService: UserService,
    private tokenService: TokenService,
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
    this.userService.setUserName('Sign In');
    this.tokenService.removeToken();
  }
}
