import { Component, OnInit } from '@angular/core';
import { PokemonsList } from '../../shared/pokemons-list';
import { PokemonsService } from '../../shared/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caught-pokemons',
  templateUrl: './caught-pokemons.component.html',
  styleUrls: ['./caught-pokemons.component.css']
})
export class CaughtPokemonsComponent implements OnInit {

  public pokemonsList: PokemonsList;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router
  ) {
    this.pokemonsList = new PokemonsList();
  }

  ngOnInit() {
    this.loadMore();
  }

  loadMore = (): void => {
    this.pokemonsService.getCaughtPokemons(this.pokemonsList.page + 1)
      .subscribe(newPokemonsList => {
        this.pokemonsList.addPokemons(newPokemonsList);
      });
  }

  redirectToPokemon = (pokemonId: number): void => {
    this.router.navigate([`/pokemons/${pokemonId}`]);
  }

}
