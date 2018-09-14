import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() onCatchClick: Function;
  @Input() redirectToPokemon: Function;

  constructor() { }

  ngOnInit() {}

}
