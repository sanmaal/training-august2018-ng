import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PokemonsService } from '../../shared/services/pokemons.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() isLoggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PokemonsService,
  ) { }

  ngOnInit() {
  }

  catchPokemon(pokemon): void {
    this.service.catchPokemon(pokemon)
    .subscribe(_ => console.log('catched'));
  }

  checkCatched(id: string): boolean {
    if (this.service.checkCatched(id)) { return true; }
  }

  getDate(id: string): Date {
    const pokemon = this.service.checkCatched(id);
    if (pokemon) { return pokemon.date; }
  }

}
