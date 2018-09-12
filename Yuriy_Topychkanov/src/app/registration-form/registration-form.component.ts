import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: [ './registration-form.component.scss' ]
})
export class RegistrationFormComponent {
  registrationForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^[a-zA-Z0-9]{8,30}$')),
  });

  onSubmit() {
    if (this.registrationForm.valid)
      console.warn(this.registrationForm.value);
  }

}
