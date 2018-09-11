import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../shared/models/pokemon';
import { PokemonsService } from '../../shared/services/pokemons.service';

@Component({
  selector: 'app-catched-list',
  templateUrl: './catched-list.component.html',
  styleUrls: ['./catched-list.component.css']
})
export class CatchedListComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(
    private service: PokemonsService
  ) { }

  ngOnInit() {
    this.service.startLoad();
    this.getPokemons();
  }

  getPokemons(): void {
    this.service.getCathcedPokemons()
      .subscribe(_ => this.pokemons = this.service.catchedPokemons);
  }

  loadPage(): void {
    this.getPokemons();
  }
}
