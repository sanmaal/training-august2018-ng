import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../sevices/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordValidators = [Validators.required, Validators.minLength(5)];

  newProfileForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormGroup({
        passwordOrigin: new FormControl('', this.passwordValidators),
        passwordConfirm: new FormControl('')
      }, this.passwordsAreEqual())
  });

  error: string = '';

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
  }

  public passwordsAreEqual(): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      const passwordOrigin = group.get('passwordOrigin').value;
      const passwordConfirm = group.get('passwordConfirm').value;

      return passwordOrigin !== passwordConfirm ? {'passwordsNotEqual': 'true'} : null;
    };
  }

  public onSubmit() {
    const {userName, email, password} = this.newProfileForm.value;
    this.authService.register(userName, email, password.passwordOrigin)
      .subscribe(res => {
        this.authService.setToken(res.token);
        this.router.navigate(['/all-pokemons'])
      }, err => this.error = err.error.message);
  }

}
