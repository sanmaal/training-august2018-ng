import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { TokenService } from '../services/token.service';
import { Pokemon } from '../models/Pokemon';
import { BASE_URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  limit = 8;
  catchedPokemons = [];

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getPokemons(start) {
    const url = `http://localhost:5000/pokemons?_start=${start}&_limit=${this.limit}`;
    return this.http.get<Array<Pokemon>>(url)
      .pipe(map(res => res));
  }

  catchPokemon(pokemon) {
    const url = `${BASE_URL}/catch`;
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'x-token': this.tokenService.getToken()
      })
    };
    if (pokemon) {
      return this.http.put<Array<number>>(url, pokemon, httpOptions)
        .pipe(map(pokemons => pokemons));
    }
  }

  getChatchedPokemons() {
    const url = `${BASE_URL}/catched`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token': this.tokenService.getToken()
      })
    };
    return this.http.get<Array<number>>(url, httpOptions)
      .pipe(map(pokemons => {
        this.catchedPokemons = pokemons;
      }));
  }
}
