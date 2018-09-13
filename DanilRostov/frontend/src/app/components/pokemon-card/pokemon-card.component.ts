import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() id;

  imageUrl;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.imageUrl = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${this.id}.png`;
  }

  onClick(pokemon) {
    this.pokemonsService.catchPokemon(pokemon);
  }

}
