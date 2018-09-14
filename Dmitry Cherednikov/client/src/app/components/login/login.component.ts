import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm: FormGroup;
  errorMessage: any = null;

  nameValidators = [
    Validators.required, 
    Validators.minLength(4), 
    Validators.maxLength(15),
  ];
  passwordValidatos = [
    Validators.required, 
    Validators.minLength(6), 
    Validators.maxLength(15),
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', this.nameValidators],
      password: ['', this.passwordValidatos],
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.userService.login(this.loginForm.value).subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.userService.userEmitChange(data);
        this.router.navigate(['/all-pokemons']);
      },
      error => {
        this.errorMessage = error;
      }
    )
  }
}
