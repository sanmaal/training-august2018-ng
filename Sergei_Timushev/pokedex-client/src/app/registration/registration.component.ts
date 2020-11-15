import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  passwordValidators = [Validators.required, Validators.minLength(6)];

  registrationForm: FormGroup = new FormGroup({
    username: new FormControl('', [
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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  passwordsAreEqual(): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      const passwordOrigin = group.get('passwordOrigin').value;
      const passwordConfirm = group.get('passwordConfirm').value;

      return passwordOrigin !== passwordConfirm ? {'passwordsNotEqual': 'true'} : null;
    };
  }

  onSubmit() {
    const {username, email, password} = this.registrationForm.value;
    this.authService.register(username, email, password.passwordOrigin)
      .subscribe(res => {
        this.authService.setToken(res.token);
        this.router.navigate(['/pokemons'])
      }, err => this.error = err.error.message);
  }

}
