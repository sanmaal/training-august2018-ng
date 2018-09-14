import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../services/pokemons/pokemons.service";

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: [ './pokemons-list.component.scss' ]
})
export class PokemonsListComponent implements OnInit {
  pokemons: any = [];
  page: number = 1;

  constructor(private pokemonsService: PokemonsService) {
  }

  addPokemons() {
    this.pokemonsService.getPokemonsPerPage(this.page)
      .subscribe((pokemons) => this.pokemons = this.pokemons.concat(pokemons))
  }

  ngOnInit() {
    this.addPokemons()
  };

  loadMore() {
    this.page += 1;
    this.addPokemons()
  }

}
