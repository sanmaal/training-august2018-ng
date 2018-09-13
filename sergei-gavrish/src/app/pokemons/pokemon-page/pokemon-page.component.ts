import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PokemonsService } from '../../shared/services/pokemons.service';
import { AuthService } from '../../shared/services/auth.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  @Input() pokemonId$: Observable<Pokemon>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PokemonsService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonId$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.service.getPokemon(params.get('id')))
      );
  }

  catchPokemon(pokemon) {
    this.service.catchPokemon(pokemon)
    .subscribe(_ => console.log('catched'));
  }

  checkIfCatched(id: string): boolean {
    if (this.service.checkIfCatched(id)) { return true; }
  }

  getDate(id: string) {
    const pokemon = this.service.checkIfCatched(id);
    if (pokemon) { return pokemon.date; }
  }

  checkAuth() {
    return this.auth.isLoggedIn;
  }

}
