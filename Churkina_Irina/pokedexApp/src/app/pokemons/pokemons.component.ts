import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonsApiService } from "../pokemons-api.service";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"]
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  private page = 1;
  private lessPokemons = false;
  private limit = 20;
  authToken = this.cookieService.get("currToken");
  caughtPage = this.route.snapshot.data["caught"];

  getPokemons(): void {
    this.pokemonsApiService
      .getPokemons(this.caughtPage, this.page, this.limit)
      .subscribe(pokemonsResult => {
        this.pokemons = this.pokemons.concat(pokemonsResult);
        if (pokemonsResult.length < this.limit) {
          this.lessPokemons = true;
        }
      });
    this.page += 1;
  }

  catchPokemon(pokemon): void {
    this.pokemonsApiService.catchPokemon(pokemon.id).subscribe(() => {
      pokemon.caught = true;
    });
  }

  leavePokemon(pokemon): void {
    this.pokemonsApiService.leavePokemon(pokemon.id).subscribe(() => {
      pokemon.caught = false;
    });
  }

  constructor(
    private pokemonsApiService: PokemonsApiService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPokemons();
  }
}
