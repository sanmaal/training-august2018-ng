import { Component, OnInit, Input } from '@angular/core';
import { PokemonsList } from '../../shared/pokemons-list';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  @Input() pokemonsList: PokemonsList;
  @Input() loadMore: Function;
  @Input() onCatchClick: Function;
  @Input() redirectToPokemon: Function;

  constructor() { }

  ngOnInit() {
  }

}
