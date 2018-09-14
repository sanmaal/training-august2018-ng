import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemons-list-page',
  templateUrl: './pokemons-list-page.component.html',
  styleUrls: ['./pokemons-list-page.component.css']
})
export class PokemonsListPageComponent implements OnInit, OnChanges {
  @Input() pokemons: Pokemon[];
  @Input() isLoggedIn: boolean;
  @Output() loadPageClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).forEach( change => this[change] = changes[change].currentValue);
  }

  loadPage(event) {
    this.loadPageClick.emit(event);
  }

}
