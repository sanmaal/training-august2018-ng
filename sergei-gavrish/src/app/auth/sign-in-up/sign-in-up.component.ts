import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {
  profileForm = new FormGroup({
    login: new FormControl('Igor', Validators.required),
    password: new FormControl('12345', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { login, password } = this.profileForm.value;
    if (login && password) {
      this.service[this.route.snapshot.data.form](login, password)
        .subscribe(data => {
          console.log('success');
          this.router.navigate(['/pokemons/cathced']);
          // route navigate to pokemon page
        });
    }
  }

}
