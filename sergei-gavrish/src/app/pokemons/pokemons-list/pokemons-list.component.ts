import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../shared/services/pokemons.service';
import { AuthService } from '../../shared/services/auth.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemons-list',
  template: `
    <pokemons-page
      [pokemons]="getPokemons()"
      (loadPageClick)="loadPage($event)"
      [isLoggedIn]="auth.isLoggedIn$ | async"
    ></pokemons-page>
  `,
})
export class PokemonsListComponent implements OnInit {

  constructor(
    private service: PokemonsService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.checkIfAny();
  }

  checkIfAny(): void {
    if (!this.service.pokemons.length) {
      this.loadMore();
    } else {
      this.getPokemons();
    }
  }

  loadMore(): void {
    this.service.getPokemons()
      .subscribe(_ => this.getPokemons());
  }

  getPokemons(): Pokemon[] {
    return this.service.pokemons;
  }

  loadPage(): void {
    this.service.pokemonsPage = 1;
    this.loadMore();
  }

}
