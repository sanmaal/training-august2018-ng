import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private allPokemons = [];
  private catchedPokemons = [];

  get getAllPokemons() {
    return this.allPokemons;
  }

  get getCatchedPokemons() {
    return this.catchedPokemons;
  }

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get('http://localhost:3000/pokemons/')
      .pipe(
        tap((pokemons: Pokemon[]) =>
          this.allPokemons = this.allPokemons
            .concat(...pokemons)
            .sort((pokemon, next) => pokemon.id - next.id)));
  }

  getCatched() {
    return this.http.get('http://localhost:3000/collections/')
    .pipe(
      tap((pokemons: Pokemon[]) =>
        this.catchedPokemons = this.catchedPokemons
          .concat(...pokemons)
          .sort((pokemon, next) => pokemon.id - next.id)));
  }

  catch(name, id, user_name, user_id) {
    console.log('123');
    return this.http.post<Pokemon>('http://localhost:3000/collections/', {name, id, user_name, user_id}, httpOptions)
      .pipe(
        tap(_ => console.log(1)));
  }
}
