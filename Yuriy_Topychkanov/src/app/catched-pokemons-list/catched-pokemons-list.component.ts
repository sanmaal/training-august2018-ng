import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../services/pokemons/pokemons.service";

@Component({
  selector: 'app-catched-pokemons-list',
  templateUrl: './catched-pokemons-list.component.html',
  styleUrls: [ './catched-pokemons-list.component.scss' ]
})
export class CatchedPokemonsListComponent implements OnInit {
  pokemons: any = [];
  page: number = 1;

  constructor(private pokemonsService: PokemonsService) {
  }

  addPokemons() {
    this.pokemonsService.getCatchedPokemonsPerPage(this.page)
  }

  ngOnInit() {
    this.addPokemons()
  }

  /* loadMore() {
     this.page += 1;
     this.addPokemons()
   }*/

}
