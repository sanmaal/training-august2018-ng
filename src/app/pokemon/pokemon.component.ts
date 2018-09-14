import { Component, OnInit } from '@angular/core';
import {  PokemonsScreenComponent  } from '../pokemons-screen/pokemons-screen.component';
import { Input} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  wasClicked = false;

  onClick() {
        this.wasClicked= !this.wasClicked;
  }
  
  ngOnInit() {
  }

  @Input() pokemon: any;

}
