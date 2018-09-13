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
  @Input() pokemon$: Observable<Pokemon>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PokemonsService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemon$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.service.getPokemon(params.get('id'))
        })
      );
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

  checkAuth(): Observable<boolean> {
    return this.auth.isLoggedIn$;
  }

}
