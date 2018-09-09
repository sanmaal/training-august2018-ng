import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {
  profileForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private service: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { login, password } = this.profileForm.value;
    this.service[this.route.snapshot.data.form](login, password)
      .subscribe(data => console.log(data));
  }

}
