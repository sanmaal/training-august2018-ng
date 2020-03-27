import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName = 'Sign In';

  constructor() { }

  setUserName(name) {
    this.userName = name;
  };

  getNameOfUser() {
    return this.userName;
  }
}
