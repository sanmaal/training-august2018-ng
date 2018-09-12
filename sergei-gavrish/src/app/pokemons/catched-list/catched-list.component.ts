import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../shared/services/pokemons.service';
import { AuthService } from '../../shared/services/auth.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'app-catched-list',
  templateUrl: './catched-list.component.html',
  styleUrls: ['./catched-list.component.css']
})
export class CatchedListComponent implements OnInit {

  constructor(
    private service: PokemonsService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
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

  // loadPage(): void {
  //   this.service.increasecatchedPage = 1;
  //   this.loadMore();
  // }
}
