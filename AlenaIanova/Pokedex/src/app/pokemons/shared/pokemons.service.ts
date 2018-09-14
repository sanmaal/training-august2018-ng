import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonsList } from './pokemons-list';
import { Pokemon } from './pokemon';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient,
  ) {}

  private pokemonsUrl = `${environment.host}pokemons/`;

  getPokemons(page: number): Observable<PokemonsList> {
    return this.http.get<PokemonsList>(`${this.pokemonsUrl}page/${page}`, httpOptions)
      .pipe(
        catchError(this.handleError<PokemonsList>())
      );
  }

  getCaughtPokemons(page: number): Observable<PokemonsList> {
    return this.http.get<PokemonsList>(`${this.pokemonsUrl}caught/page/${page}`, httpOptions)
      .pipe(
        catchError(this.handleError<PokemonsList>())
      );
  }

  getPokemon(id: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonsUrl}${id}`)
      .pipe(
        catchError(this.handleError<Pokemon>())
      );
  }

  catchPokemon(id: number): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.pokemonsUrl}${id}/catch`, httpOptions)
      .pipe(
        catchError(this.handleError<Pokemon>())
      );
  }

  private handleError<T> () {
    return (error: any): Observable<any> => {
      if (error.error.error) {
        return of(error.error);
      }
      return of({error: 'Something wrong was happen'});
    };
  }
}
