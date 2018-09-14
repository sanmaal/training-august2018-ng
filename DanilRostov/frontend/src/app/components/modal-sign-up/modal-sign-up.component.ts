import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.css']
})
export class ModalSignUpComponent implements OnInit {
  name;
  email;
  password;

  constructor(private modalsService: ModalsService) { }

  ngOnInit() {
  }

  onSingUpModalClose() {
    this.modalsService.singUpModalToggle();
  }

  signUp(form) {
    this.modalsService.singUpModalToggle();
    this.name = form.value.userName;
    this.password = form.value.password;
    this.email = form.value.email;
    console.log(this.name, this.password, this.email);
    
  }
}
