import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../shared/services/pokemons.service';
import { AuthService } from '../../shared/services/auth.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'app-catched-list',
  template: `
  <pokemons-page
    [pokemons]="getPokemons()"
    (loadPageClick)="loadPage($event)"
    [isLoggedIn]="auth.isLoggedIn$ | async"
  ></pokemons-page>
  `,
})
export class CatchedListComponent implements OnInit {

  constructor(
    private service: PokemonsService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.checkIfAny();
  }

  checkIfAny(): void {
    if (!this.service.catchedPokemons.length) {
      this.loadMore();
    } else {
      this.getPokemons();
    }
  }

  loadMore(): void {
    this.service.getCathcedPokemons()
      .subscribe(_ => this.getPokemons());
  }

  getPokemons(): Pokemon[] {
    return this.service.catchedPokemons;
  }

  loadPage(): void {
    this.service.catchedPokemonsPage = 1;
    this.loadMore();
  }

}
