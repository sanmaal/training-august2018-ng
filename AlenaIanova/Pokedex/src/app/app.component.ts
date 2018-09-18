import { Component } from '@angular/core';
import { SessionService } from './shared/session.service';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private tokenService: TokenService
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
    return this.tokenService.getUserInfo();
  }
}
