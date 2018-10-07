import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "../authentication/authentication.service";
import { Router } from "@angular/router";
import {
  catchedPokemons,
  catchPokemon,
  pokemonsDetail,
  pokemonsPerPage,
  releasePokemon
} from "../../../environments/pokemonUrls";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemonsListPage = 1;
  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) {
  }

  getPokemonsPerPage(page = this.pokemonsListPage) {
    const token = this.auth.getToken();
    return this.http.get(pokemonsPerPage(page, token));
  }

  getCatchedPokemons() {
    const token = this.auth.getToken();
    if (token) {
      return this.auth.request(
        this.http.get(catchedPokemons(token))
      )
    }
  }


  catchPokemon(id) {
    const token = this.auth.getToken();
    if (token) {
      const formData = { id: id, token: token };
      return this.auth.request(
        this.http.post(catchPokemon, formData, httpOptions)
      )
    }
  }

  releasePokemon(id) {
    const token = this.auth.getToken();
    if (token) {
      const formData = { id: id, token: token };
      return this.auth.request(
        this.http.post(releasePokemon, formData, httpOptions)
      )
    }
  }

  moveToPokemonDetail(id) {
    this.router.navigate([ pokemonsDetail(id) ]);
  }

  getPokemonDetailPage(id) {
    const token = this.auth.getToken();
    if (token) {
      return this.auth.request(
        this.http.get(pokemonsDetail(id, token))
      )
    }
  }
}
