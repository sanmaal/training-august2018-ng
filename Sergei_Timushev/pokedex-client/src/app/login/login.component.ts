import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = '';
  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(res => {
      this.authService.setToken(res.token);
      this.router.navigate(['/pokemons'])
    }, err => this.error = err.error.message);
  }

}
