import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() id;

  imageUrl;

  constructor(
    private pokemonsService: PokemonsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageUrl = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${this.id}.png`;
  }

  onClick(pokemon) {
    event.stopImmediatePropagation();
    this.pokemonsService.catchPokemon(pokemon).subscribe();
  }

  onDetailedPokemon() {
    this.router.navigate(['/pokemon']);
  }
}
