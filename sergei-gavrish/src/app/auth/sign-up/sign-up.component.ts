import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { PasswordValidation } from '../../shared/validators/password-validation.validator';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private router: Router,
    private service: AuthService,
    private builder: FormBuilder,
  ) { }

  profileForm = this.builder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }, {
    validator: PasswordValidation.match,
  });

  onSubmit(): void {
    const { login, password } = this.profileForm.value;
    if (login && password) {
      this.service.signUp(login, password)
        .subscribe(_ => {
          this.router.navigate(['/signIn']);
        });
    }
  }

}
