import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { Pokemon } from "../../../../domain/Pokemon";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  pokemon: Pokemon = {
    _id: '',
    id: null,
    name: '',
  };
  caught: boolean = false;
  srcImage: string;
  time: Date;

  constructor(private pokemonsService: PokemonsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pmap => this.getPokemon(pmap.get('id')))
  }

  getPokemon(id) {
    this.pokemonsService.getPokemonById(id).subscribe(res => {
      this.pokemon = <Pokemon>res;
      this.srcImage = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${this.pokemon.id}.png`;
    })
  }

}
