import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(
    private router: Router,
    private service: AuthService,
  ) { }

  profileForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    const { login, password } = this.profileForm.value;
    if (login && password) {
      this.service.signIn(login, password)
        .subscribe(_ => {
          this.router.navigate(['/pokemons/cathced']);
        });
    }
  }

}
