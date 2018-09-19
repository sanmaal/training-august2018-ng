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
  needLoader: boolean = false;
  constructor(private pokemonsService: PokemonsService) {
  }


  addPokemons() {
    this.pokemonsService.getCatchedPokemonsPerPage(this.page)
      .subscribe((pokemons) => {
        pokemons.length === 10 ? this.needLoader = true : this.needLoader = false;
        this.pokemons = this.pokemons.concat(pokemons)
      })
  }

  ngOnInit() {
    this.addPokemons()
  }


  loadMore() {
    this.page += 1;
    this.addPokemons()
  }

}
