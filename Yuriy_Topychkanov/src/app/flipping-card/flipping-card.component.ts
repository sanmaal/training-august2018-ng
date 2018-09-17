import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication/authentication.service";
import { PokemonsService } from "../services/pokemons/pokemons.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: [ './flipping-card.component.scss' ]
})
export class FlippingCardComponent implements OnInit {
  @Input() data: any;
  additions: any = [];
  flipped: boolean = false;
  isLoggedIn: boolean = false;
  pokemonCatched: boolean = false;
  timestampOfCapture: Number;

  constructor(private auth: AuthenticationService, private pokemonsService: PokemonsService, private router: Router) {
    this.auth.isLoggedIn$().subscribe((data: boolean) => this.isLoggedIn = data);
  }

  catchPokemon(id) {
    this.pokemonsService.catchPokemon(id).subscribe((data) => console.log(data));
  }

  releasePokemon(id) {
    this.pokemonsService.releasePokemon(id).subscribe((data) => console.log(data))
  }

  moveToPokemonDetail(id) {
    this.router.navigate([ `/pokemon/${id}` ]);
  }

  ngOnInit() {
    if (this.data.pokemon) {
      this.pokemonCatched = true;
    }
    if (this.data.timestamp) {
      this.timestampOfCapture = this.data.timestamp;
    }
  }

  rotateCard() {
    this.flipped = !this.flipped;
  }

}
