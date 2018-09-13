import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
  providers: [PokemonsService]
})
export class PokemonsListComponent implements OnInit {

  pokemons = [];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.onLoadPokemons();
  }

  onLoadPokemons() {
    const numberOfLoadedPokemons = this.pokemons.length;
    if (!numberOfLoadedPokemons) {
      this.pokemonsService.getPokemons(numberOfLoadedPokemons).subscribe(pokemons => {
        this.pokemons = pokemons;
      });
    } else {
      this.pokemonsService.getPokemons(numberOfLoadedPokemons).subscribe(pokemons => {
        this.pokemons = [...this.pokemons, ...pokemons];
      });
    }
  }
}