import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "../authentication/authentication.service";
import { Router } from "@angular/router";

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
    if (token) {
      return this.http.get(`http://localhost:3000/?page=${page}&token=${token}`);
    }
    return this.http.get(`http://localhost:3000/?page=${page}`);
  }

  getCatchedPokemonsPerPage(page) {
    const token = this.auth.getToken();
    if (token) {
      return this.auth.request(
        this.http.get(
          `http://localhost:3000/catched-pokemons/?page=${page}&token=${token}`,
        )
      )
    }
  }


  catchPokemon(id) {
    const token = this.auth.getToken();
    if (token) {
      const formData = { id: id, token: token };
      return this.auth.request(
        this.http.post('http://localhost:3000/catch-pokemon/', formData, httpOptions)
      )
    }
  }

  releasePokemon(id) {
    const token = this.auth.getToken();
    if (token) {
      const formData = { id: id, token: token };
      return this.auth.request(
        this.http.post('http://localhost:3000/release-pokemon/', formData, httpOptions)
      )
    }
  }

  moveToPokemonDetail(id) {
    this.router.navigate([ `/pokemon/${id}` ]);
  }

  getPokemonDetailPage(id) {
    const token = this.auth.getToken();
    if (token) {
      return this.auth.request(
        this.http.get(`http://localhost:3000/pokemon/${id}?token=${token}`)
      )
    }
  }
}
