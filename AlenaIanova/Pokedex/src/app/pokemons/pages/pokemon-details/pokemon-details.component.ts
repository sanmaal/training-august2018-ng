import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokemonsService } from '../../shared/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.pokemonService.getPokemon(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.pokemon = res;
      });
  }

}
