import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonsService } from '../../shared/services/pokemons.service';
import { AuthService } from '../../shared/services/auth.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  constructor(
    private service: PokemonsService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkIfAny();
  }

  checkIfAny() {
    let source;
    if (this.route.snapshot.data.page === 'catched') {
      source = this.service.catchedPokemons$;
    } else {
      source = this.service.pokemons$;
    }
    if (!source.length) {
      this.loadMore();
    } else {
      this.getPokemons();
    }
  }

  loadMore(): void {
    if (this.route.snapshot.data.page === 'catched') {
      this.service.getCathcedPokemons()
        .subscribe(_ => this.getPokemons());
    } else {
      this.service.getPokemons()
        .subscribe(_ => this.getPokemons());
    }
  }

  getPokemons(): Pokemon[] {
    if (this.route.snapshot.data.page === 'catched') {
      return this.service.catchedPokemons$;
    } else {
      return this.service.pokemons$;
    }
  }

  loadPage(): void {
    if (this.route.snapshot.data.page === 'catched') {
      this.service.catchedPokemonsPage$ = 1;
    } else {
      this.service.pokemonsPage$ = 1;
    }
    this.loadMore();
  }

  checkAuth() {
    return this.auth.isLoggedIn$;
  }

}
