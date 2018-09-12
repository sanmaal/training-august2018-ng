import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: [ './pokemons-list.component.scss' ]
})
export class PokemonsListComponent implements OnInit {
  pokemons: any;
  page: number = 1;

  constructor() {
  }

  ngOnInit() {
    let pokemonsData = fetch(`http://localhost:3000/?page=${this.page}`);
    pokemonsData
      .then(response => response.json())
      .then(pokemonsData => this.pokemons = pokemonsData)
      .catch(err => console.log(err))
  };

}
