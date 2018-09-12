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
    this.pokemonsService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

}
