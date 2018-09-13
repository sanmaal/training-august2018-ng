import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  limit = 8;

  constructor(private http: Http) { }

  getPokemons(start) {
    const url = `http://localhost:5000/pokemons?_start=${start}&_limit=${this.limit}`;
    return this.http.get(url)
      .pipe(map(res => res.json()))
  }

  catchPokemon(pokemon) {
    console.log(pokemon);
  }
}
