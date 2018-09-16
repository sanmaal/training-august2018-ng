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
  additions: any = [];
  flipped: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private auth: AuthenticationService, private pokemonsService: PokemonsService) {
  }

  catchPokemon(id) {
    this.pokemonsService.catchPokemon(id).subscribe((data) => console.log(data));
  }

  releasePokemon(id) {
    this.pokemonsService.releasePokemon(id).subscribe((data) => console.log(data))
  }


  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  rotateCard() {
    this.flipped = !this.flipped;
  }

}
