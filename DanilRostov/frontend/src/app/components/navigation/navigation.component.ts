import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private modalsService: ModalsService,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  onDropDownToggle() {
    this.toggleDropDown();
    // console.log(this.userService.userName);
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

}
