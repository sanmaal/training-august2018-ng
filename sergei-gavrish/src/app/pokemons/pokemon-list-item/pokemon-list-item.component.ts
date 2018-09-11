import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonsService } from '../../shared/services/pokemons.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PokemonsService,
  ) { }

  ngOnInit() {
  }

  catchPokemon(pokemon) {
    this.service.catchPokemon(pokemon)
    .subscribe(_ => console.log('catched'));
  }

}
