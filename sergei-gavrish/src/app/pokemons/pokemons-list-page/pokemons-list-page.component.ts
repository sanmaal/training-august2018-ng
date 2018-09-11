import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemons-list-page',
  templateUrl: './pokemons-list-page.component.html',
  styleUrls: ['./pokemons-list-page.component.css']
})
export class PokemonsListPageComponent implements OnInit, OnChanges {
  @Input() pokemons: Pokemon[];
  @Output() loadPageClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
    // this.getPokemons(this.page, this.limit);
    // this.pokemons = this.service.pokemons;
  }

  loadPage(event) {
    this.loadPageClick.emit(event);
  }

}
