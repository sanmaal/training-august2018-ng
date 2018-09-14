import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PokemonsService } from "../pokemons.service";
import { Pokemon } from "../domain/Pokemon";
import { log } from 'util';
@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  @Input() 
  pokemon: Pokemon;
  caught: boolean = false;
  srcImage: string;

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.showPokemon();
  }

  showPokemon() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.pokemonsService.showPokemon(params.id);
      this.srcImage = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${params.id}.png`;
    })
  }

  catchPokemon(pokemon) {
    this.pokemonsService.catchPokemon(pokemon);
  }

  checkIfCatched(id: string): boolean {
    if (this.pokemonsService.isPokemonCaughtByUser(id)) { return true; }
  }
  
}
