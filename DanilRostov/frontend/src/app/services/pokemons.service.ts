import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  limit = 8;

  constructor(private http: HttpClient) { }

  getPokemons(start) {
    const url = `http://localhost:5000/pokemons?_start=${start}&_limit=${this.limit}`;
    return this.http.get<Array<Pokemon>>(url)
      .pipe(map(res => res))
  }

  catchPokemon(pokemon) {
    console.log(pokemon);
  }
}
