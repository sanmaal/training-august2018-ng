import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Pokemon } from '../models/pokemon';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private _pokemons: Pokemon[] = [];
  private _catchedPokemons: Pokemon[] = [];

  private _pokemonsPage = 1;
  private _catchedPokemonsPage = 1;
  private limit = 12;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get catchedPokemons(): Pokemon[] {
    return this._catchedPokemons;
  }

  set pokemonsPage(numb: number) {
    this._pokemonsPage += numb;
  }

  set catchedPokemonsPage(numb: number) {
    this._catchedPokemonsPage += numb;
  }

  get pokemonsPage(): number {
    return this._pokemonsPage;
  }

  get catchedPokemonsPage(): number {
    return this._catchedPokemonsPage;
  }

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.host}/pokemons/?_page=${this._pokemonsPage}&_limit=${this.limit}`)
      .pipe(
        tap((pokemons: Pokemon[]) => this._pokemons = this._pokemons.concat(...pokemons)),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getCathcedPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(
      `${environment.host}/pokemons/catched/?_page=${this._catchedPokemonsPage}&_limit=${this.limit}`,
      httpOptions
    )
      .pipe(
        tap((pokemons: Pokemon[]) => {
          this._catchedPokemons = this._catchedPokemons.concat(
            pokemons.filter(pokemon => {
              return !this._catchedPokemons.some(cathed => cathed._id === pokemon._id);
          }));
        }),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getPokemon(id: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.host}/pokemons/${id}`)
      .pipe(
        tap(_ => console.log('Pokemon was fetched successfully')),
        catchError(this.handleError<Pokemon>(`getPokemon ${id}`))
      );
  }

  catchPokemon(id: string): Observable<any> {
    const body = new HttpParams()
      .set('id', id);
    return this.http.put(`${environment.host}/pokemons/catch`, body, httpOptions)
      .pipe(
        tap((pokemon: Pokemon[]) => this._catchedPokemons = this._catchedPokemons.concat(...pokemon)),
        catchError(this.handleError<any>(`catchPokemon ${id}`))
      );
  }

  checkCatched(id: string): void | Pokemon {
    return this._catchedPokemons.find( pokemon =>
      pokemon._id === id );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
