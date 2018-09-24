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

  constructor(
    private route: ActivatedRoute,
    private pokemonsApiService: PokemonsApiService,
    private cookieService: CookieService
  ) {}

  getPokemon(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonsApiService
      .getPokemon(id)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
      });
  }
  ngOnInit() {
    this.getPokemon();
  }
}
