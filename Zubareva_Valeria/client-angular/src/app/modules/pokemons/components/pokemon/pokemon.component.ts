import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../../domain/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;
  srcImage: string;
  linkPokemon: string;
  constructor() {
  }

  ngOnInit() {
    this.srcImage = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${this.pokemon.id}.png`;
    this.linkPokemon = `/pokemons/${this.pokemon.id}`
  }

}
