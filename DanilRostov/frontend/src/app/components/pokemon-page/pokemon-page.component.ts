import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../services/pokemons.service';
import { IMG_UR } from '../../constants/api';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    console.log(this.pokemonsService.getCurrentPokemonId());
  }

}
