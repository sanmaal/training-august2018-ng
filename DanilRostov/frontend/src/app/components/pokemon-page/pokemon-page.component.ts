import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PokemonsService } from '../../services/pokemons.service';
import { IMG_UR } from '../../constants/api';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  pokemon = {
    name: null
  };
  imgUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const pokemonId = params.get('id');
        this.fetchPokemon(pokemonId);
        this.imgUrl = `${IMG_UR}/${pokemonId}.png`;
      });    
  }

  fetchPokemon(id) {
    this.pokemonsService.getPokemonById(id).subscribe(pokemon => {
      this.pokemon = pokemon[0];
    });
  }

}
