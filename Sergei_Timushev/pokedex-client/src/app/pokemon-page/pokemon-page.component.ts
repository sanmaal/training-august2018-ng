import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PokemonsService } from "../pokemons.service";
import { Pokemon } from "../domain/Pokemon";
import { AuthService } from '../auth.service';
import { _localeFactory } from '@angular/core/src/application_module';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  @Input() 
  pokemon: Pokemon = {
    _id: '',
    id: null,
    name: '',
    users: [],
  };
  caught: boolean = false;
  pokemonId: number;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute, private authService: AuthService) {
    route.params.subscribe(params => this.pokemonId = params['id'])
  }

  ngOnInit() {
    this.showPokemon();
  }

  showPokemon() {
    this.pokemonsService.showPokemon(this.pokemonId)
      .subscribe(pokemonData => {
        this.pokemon = <Pokemon>pokemonData;
      });
      
    this.authService.getToken();
  }

  checkAuthorization() {
    return this.authService.checkAuth()
  }

  catchPokemon(pokemon) {
    this.pokemonsService.catchPokemon(pokemon);
  }

  // checkIfCatched(id: string): boolean {
  //   if (this.pokemonsService.isPokemonCaughtByUser(id)) { return true; }
  // }
  
}
