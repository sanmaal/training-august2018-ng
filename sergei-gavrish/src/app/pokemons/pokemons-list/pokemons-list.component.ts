import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[];
  private page: number;
  private limit: number;

  constructor(
    private service: PokemonsService
  ) {
    this.page = 1;
    this.pokemons = [];
    this.limit = 12;
  }

  ngOnInit() {
    this.getPokemons(this.page, this.limit);
    console.log(this);
  }

  getPokemons(page, limit): void {
    this.service.getPokemons(page, limit)
      .subscribe(pokemons => this.pokemons.push(...pokemons));
  }

  loadPage(): void {
    this.page++;
    this.getPokemons(this.page, this.limit);
  }
}
