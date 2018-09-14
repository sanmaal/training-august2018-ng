import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ])
    });
    this.errorMessage = '';
  }

  ngOnInit() {
  }

  send() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
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
