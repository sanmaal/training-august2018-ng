import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() id;

  imageUrl;

  ngOnInit() {
    this.imageUrl = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${this.id}.png`;
  }

  onClick() {
    console.log(`Clicked on ${this.id} pokemon`);
  }

}
