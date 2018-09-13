import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon;

  imageUrl = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/1.png`;

  onClick() {
    console.log(1);
  }

}
