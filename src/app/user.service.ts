import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  isLoggedIn = false;

  onAuth(data: any) {
    return fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(res =>
        res.some(
          item =>
            (this.isLoggedIn =
              item.email == data.email && item.password == data.password)
        )
      );
  }
}
