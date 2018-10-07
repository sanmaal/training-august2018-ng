import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFormsService } from "../services/user-forms/user-forms.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent {
  authorizedSuccessfull: boolean = false;
  errorMessage: string;
  authorizationForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^[a-zA-Z0-9]{8,30}$')),
  });

  constructor(private userFormsService: UserFormsService) {
  }

  onSubmit() {
    if (this.authorizationForm.valid) {
      this.userFormsService.authorizeUser(this.authorizationForm.value)
        .subscribe((data: any) => {
          if (data.token) {
            this.authorizedSuccessfull = true;
          }
          if (data.error) {
            this.errorMessage = data.error;
          }
        });

    }
  }
}
