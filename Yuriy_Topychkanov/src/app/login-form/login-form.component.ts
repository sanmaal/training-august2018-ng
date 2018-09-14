import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserFormsService } from "../services/user-forms/user-forms.service";
import { AuthenticationService } from "../services/authentication/authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent {
  authorizedSuccessFull: boolean = false;

  authorizationForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^[a-zA-Z0-9]{8,30}$')),
  });

  constructor(private userFormsService: UserFormsService, private auth: AuthenticationService) {
  }

  onSubmit() {
    if (this.authorizationForm.valid) {
      this.userFormsService.authorizeUser(this.authorizationForm.value)
        .subscribe((data: any) => {
          if (data.token) {
            this.authorizedSuccessFull = true;
          }
        });

    }
  }
}
