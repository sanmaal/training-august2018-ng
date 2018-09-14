import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserFormsService } from "../services/user-forms/user-forms.service";


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: [ './registration-form.component.scss' ]
})
export class RegistrationFormComponent {
  registrationComplete: boolean = false;
  registrationCompleteMessage: string = '';
  registrationErrorMessage: string = '';
  registrationForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^[a-zA-Z0-9]{8,30}$')),
  });


  constructor(private userFormsService: UserFormsService) {
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.userFormsService.registerUser(this.registrationForm.value)
        .subscribe((data: any) => {
          if (data.token) {
            this.registrationCompleteMessage = data.message;
            this.registrationComplete = true;
          }
          if (data.error) {
            this.registrationErrorMessage = data.error;
          }
        });

    }
  }

}
