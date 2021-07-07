import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonsList } from '../../shared/pokemons-list';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  @Input() pokemonsList: PokemonsList;
  @Output() loadMore = new EventEmitter();
  @Output() catchPokemonClick = new EventEmitter<number>();
  @Output() redirectToPokemon = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleLoadMorePress = () => {
    this.loadMore.emit();
  }

  handleCatchPokemonClick = (pokemonId: number) => {
    this.catchPokemonClick.emit(pokemonId);
  }

  handleRedirectToPokemon = (pokemonId: number) => {
    this.redirectToPokemon.emit(pokemonId);
  }

}
