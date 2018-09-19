import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../services/pokemons/pokemons.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: [ './pokemon-detail.component.scss' ]
})
export class PokemonDetailComponent implements OnInit {
  pokemonId: number;
  pokemonData: any = {};

  constructor(private pokemonsService: PokemonsService, private router: ActivatedRoute) {
    this.pokemonId = this.router.snapshot.params[ 'id' ];
    this.pokemonsService.getPokemonDetailPage(this.pokemonId).subscribe((data) => {
      this.pokemonData = data;
    });
  }

  ngOnInit() {
  }

  catchPokemon(id) {
    this.pokemonsService.catchPokemon(id).subscribe(() => this.updatePokemonInfo(id));
  }

  releasePokemon(id) {
    this.pokemonsService.releasePokemon(id).subscribe(() => this.updatePokemonInfo(id));
  }

  updatePokemonInfo(id) {
    this.pokemonsService.getPokemonDetailPage(id).subscribe((data) => this.pokemonData = data);
  }

}
