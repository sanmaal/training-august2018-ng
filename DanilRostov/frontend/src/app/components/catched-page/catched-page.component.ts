import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-catched-page',
  templateUrl: './catched-page.component.html',
  styleUrls: ['./catched-page.component.css'],
  providers: [PokemonsService]
})
export class CatchedPageComponent implements OnInit {
  
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getChatchedPokemons().subscribe()
  }
}
