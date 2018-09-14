import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { Pokemon } from '../../../../domain/Pokemon';
import { CaughtPokemon } from '../../../../domain/CaughtPokemon';

@Component({
  selector: 'app-users-pokemons-list',
  templateUrl: './users-pokemons-list.component.html',
  styleUrls: ['./users-pokemons-list.component.scss']
})
export class UsersPokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  offset: number = 0;
  limit: number = 20;
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }

  public getPokemons() {
    this.pokemonsService.getCaughtPokemons(this.offset, this.limit)
      .subscribe( pokemons =>  {
        const caughtPokemons = (<CaughtPokemon[]>pokemons).map((pokemon) => pokemon.pokemon);
        this.pokemons = this.pokemons.concat(<Pokemon[]>caughtPokemons);
        this.offset++;
      }, err => console.log(err))
  }

  public onScrollBottom() {
    this.getPokemons();
  }
}
