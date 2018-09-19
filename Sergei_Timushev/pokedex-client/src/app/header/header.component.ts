import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authSetvice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  checkAuthorization() {
    return this.authSetvice.checkAuth()
  }

  onLogout() {
    this.authSetvice.logOut();
    this.router.navigate(['/pokemons'])
  }

}
