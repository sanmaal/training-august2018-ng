import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../domain/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [],
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService) { }

  pokemons: Pokemon[] = [];
  page: number = 1;
  selectedPokemon: Pokemon;

  ngOnInit() {
    this.getPokemons();
  }

  onSelect( pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  } 

  private getPokemons() {
    this.pokemonsService.getPokemons(this.page)
      .subscribe(pokemons =>  {
        this.pokemons = this.pokemons.concat(<Pokemon[]>pokemons);
        this.page++;
      })
  }

  public catchPokemon(pokemon: Pokemon) {
    const indx = this.pokemons.indexOf(pokemon);
    this.pokemonsService.catchPokemon(pokemon).subscribe(
      () => this.pokemons[indx].users.push({user: this.pokemonsService.getUserId()}),
      err => console.error(err));
  }

  public isAuth() {
    return this.pokemonsService.isUserAuthorized();
  }

  public isPokemonCaughtByUser(pokemonUsersList) {
    return this.pokemonsService.isPokemonCaughtByUser(pokemonUsersList);
  }

  public onScrollBottom() {
    this.getPokemons();
  }

}
