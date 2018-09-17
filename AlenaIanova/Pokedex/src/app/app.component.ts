import { Component } from '@angular/core';
import { SessionService } from './shared/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  logOut = () => {
    this.sessionService.logOut();
    if (this.router.url === '/pokemons') {
      this.router.navigate(['/']);
    }
  }

  isAuthenticated = () => {
    return this.sessionService.isAuthenticated;
  }

  getUserInfo = () => {
    return this.sessionService.getUserInfo();
  }
}
