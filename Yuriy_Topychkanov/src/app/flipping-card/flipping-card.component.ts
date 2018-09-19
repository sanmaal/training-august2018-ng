import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication/authentication.service";
import { PokemonsService } from "../services/pokemons/pokemons.service";


@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: [ './flipping-card.component.scss' ]
})
export class FlippingCardComponent implements OnInit {
  @Input() data: any;
  flipped: boolean = false;
  isLoggedIn: boolean = false;
  pokemonCatched: boolean = false;

  constructor(private auth: AuthenticationService, private pokemonsService: PokemonsService) {
    this.auth.isLoggedIn$().subscribe((data: boolean) => this.isLoggedIn = data);
  }

  catchPokemon(id) {
    this.pokemonsService.catchPokemon(id).subscribe(() => this.updatePokemonInfo(id));
  }

  releasePokemon(id) {
    this.pokemonsService.releasePokemon(id).subscribe(() => this.updatePokemonInfo(id));
  }

  updatePokemonInfo(id) {
    this.pokemonsService.getPokemonDetailPage(id).subscribe((data) => this.data = data);
  }

  moveToPokemonDetail(id) {
    this.pokemonsService.moveToPokemonDetail(id);
  }

  ngOnInit() {
    if (this.data.timestamp) {
      this.pokemonCatched = true;
    }
  }

  rotateCard() {
    this.flipped = !this.flipped;
  }

}
