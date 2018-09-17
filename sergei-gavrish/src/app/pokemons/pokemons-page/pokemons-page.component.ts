import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.css']
})
export class PokemonsPageComponent {
  @Input() pokemons: Pokemon[];
  @Input() isLoggedIn: boolean;
  @Output() loadPageClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  loadPage(event) {
    this.loadPageClick.emit(event);
  }

}
