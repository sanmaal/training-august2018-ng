import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal-sing-in',
  templateUrl: './modal-sing-in.component.html',
  styleUrls: ['./modal-sing-in.component.css']
})
export class ModalSingInComponent implements OnInit {
  signInData = {
    email: null,
    password: null
  }

  constructor(private modalsService: ModalsService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSingInModalClose() {
    this.modalsService.singInModalToggle();
  }

  signIn(form) {
    this.modalsService.singInModalToggle();
    this.signInData.password = form.value.password;
    this.signInData.email = form.value.email;
    this.authService.signIn(this.signInData).subscribe(res => {
      console.log(res.isAuth);
    });
  }
}
