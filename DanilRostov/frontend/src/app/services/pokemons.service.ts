import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  start = 0;
  limit = 8;

  constructor(private http: Http) { }

  getPokemons() {
    const url = `http://localhost:5000/pokemons?_start=${this.start}&_limit=${this.limit}`;
    return this.http.get(url)
      .pipe(map(res => res.json()))
  }
}
