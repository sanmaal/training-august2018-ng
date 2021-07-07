import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() onCatchClick = new EventEmitter<number>();
  @Output() redirectToPokemon = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  handleCatchClick = () => {
    this.onCatchClick.emit(this.pokemon.id);
  }

  handleRedirectToPokemon = () => {
    this.redirectToPokemon.emit(this.pokemon.id);
  }

}
