import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../domain/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonsService],
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  page: number = 1;
  selectedPokemon: Pokemon;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.loadPokemons();
  } 

  loadPokemons() {
    this.pokemonsService
      .getPokemons(this.page)
      .subscribe(pokemons => {
        this.pokemons = this.pokemons.concat(pokemons);
        this.page++;
      });
  }

  onScrollLoadMore() {
    this.loadPokemons();
  }
}
