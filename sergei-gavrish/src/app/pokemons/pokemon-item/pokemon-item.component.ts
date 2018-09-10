import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
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
