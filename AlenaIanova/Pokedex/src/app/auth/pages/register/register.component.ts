import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public errorMessage: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        this.matchOtherValidator('password')
      ]),
      name: new FormControl(null, [
        Validators.minLength(3)
      ])
    });
    this.errorMessage = '';
  }

  ngOnInit() {
  }

  matchOtherValidator(otherValidatorName: string): ValidatorFn {
    return (control: FormControl): { [key: string]: any } | null => {
      const thisValue = control.value;
      const otherValue = control.parent ? control.parent.controls[otherValidatorName].value : null;
      if (thisValue !== otherValue) {
        return { notMatch: true };
      } else {
        return null;
      }
    };
  }

  send() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe(res => {
          if (res.error) {
            this.errorMessage = res.error;
          } else {
            this.router.navigate(['/']);
          }
        });
    }
  }
}
