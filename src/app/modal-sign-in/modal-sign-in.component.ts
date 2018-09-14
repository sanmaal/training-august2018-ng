import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel, NgForm, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-modal-sign-in',
  templateUrl: './modal-sign-in.component.html',
  styleUrls: ['./modal-sign-in.component.scss']
})


export class ModalSignInComponent implements OnInit {

  constructor(private usersService: UsersService) { }


  onLogin(credentials): void {
    let jsonCreds = JSON.stringify(credentials);
    console.log(jsonCreds);
    this.usersService.login(jsonCreds)
    .subscribe(()=> console.log("data was successfully added"));
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


  ngOnInit() {
  }

  signupFormModalName = new FormControl('', Validators.required);
  signupFormModalEmail = new FormControl('', Validators.email);
  signupFormModalPassword = new FormControl('', Validators.required);

}



