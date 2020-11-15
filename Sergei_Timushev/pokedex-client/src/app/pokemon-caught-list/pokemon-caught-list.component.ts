import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../domain/Pokemon';
import { CaughtPokemon } from '../domain/CaughtPokemon';


@Component({
  selector: 'app-pokemon-caught-list',
  templateUrl: './pokemon-caught-list.component.html',
  styleUrls: ['./pokemon-caught-list.component.css']
})
export class PokemonCaughtListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  page: number = 1;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }

  public getPokemons() {
    this.pokemonsService.getCatchedPokemons(this.page)    
      .subscribe( pokemons =>  {
        console.log(pokemons);
        // const caughtPokemons = (<CaughtPokemon[]>pokemons).map((pokemon) => pokemon.pokemon);
        // console.log(<CaughtPokemon[]>pokemons);
        this.pokemons = this.pokemons.concat(pokemons.map((pokemon) => pokemon.pokemonId));
        console.log('POK', this.pokemons);
        this.page++;
      }, err => console.log(err))
  }

  public onScrollLoadMore() {
    this.getPokemons();
  }

}
