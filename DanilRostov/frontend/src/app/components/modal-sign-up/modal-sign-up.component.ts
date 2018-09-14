import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.css']
})
export class ModalSignUpComponent implements OnInit {
  signUpData = {
    name: null,
    email: null,
    password: null
  }

  constructor(private modalsService: ModalsService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSingUpModalClose() {
    this.modalsService.singUpModalToggle();
  }

  signUp(form) {
    this.modalsService.singUpModalToggle();
    this.signUpData.name = form.value.userName;
    this.signUpData.password = form.value.password;
    this.signUpData.email = form.value.email;
    this.authService.signUp(this.signUpData).subscribe();
  }
}
