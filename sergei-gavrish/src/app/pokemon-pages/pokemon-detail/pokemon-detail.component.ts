import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon$: Observable<Pokemon>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PokemonsService,
  ) { }

  ngOnInit() {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPokemon(params.get('id')))
    );

    console.log(this);
  }

  getPokemon() {

  }

}
