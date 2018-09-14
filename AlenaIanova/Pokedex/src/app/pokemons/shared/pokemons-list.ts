import { Pokemon } from './pokemon';

export class PokemonsList {
  pokemons: Array<Pokemon>;
  page: number;
  pages: number;

  constructor(pokemons = [], page = 0, pages = 0) {
    this.pokemons = pokemons;
    this.page = page;
    this.pages = pages;
  }

  addPokemons(newPokemonsList: PokemonsList): void {
    this.pokemons = [...this.pokemons, ...newPokemonsList.pokemons];
    this.page = newPokemonsList.page;
    this.pages = newPokemonsList.pages;
  }
}
