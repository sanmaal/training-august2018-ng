import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  model = new User();

  ngOnInit() {}

  isLoggedIn = false;

  onSubmit() {
    this.userService
      .onAuth(this.model)
      .then(res => (this.isLoggedIn = res))
      .then(status => {
        if (status == true) {
          this.router.navigate(['/pokes']);
        } else {
          console.log('error');
        }
      });
  }
}

export class User {
  id: number;
  email: string;
  password: string;
  catched: Array<number>;
}
