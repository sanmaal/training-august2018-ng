import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonsApiService } from "../pokemons-api.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon = {
    id: -1,
    name: "_"
  };

  authToken = this.cookieService.get("currToken");

  constructor(
    private route: ActivatedRoute,
    private pokemonsApiService: PokemonsApiService,
    private cookieService: CookieService
  ) {}

  getPokemon(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonsApiService
      .getPokemon(id, this.authToken)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        console.log(this.pokemon);
      });
  }
  ngOnInit() {
    this.getPokemon();
  }
}
