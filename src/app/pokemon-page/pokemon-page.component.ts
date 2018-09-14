import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonsrestService } from '../pokemonsrest.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  constructor(private pokemonsrestService: PokemonsrestService) {}

  pokemon: Pokemon;
  loading = true;

  getPokemon(): void {
    this.pokemonsrestService.getPokemonByID()
    .subscribe(pokemon => {
      let [pokemonOne] = pokemon;
      this.pokemon = pokemonOne;
      this.loading = false;
        console.log(this.pokemon);
    }
    );
  }

  ngOnInit() {
    this.getPokemon();
  }

}
