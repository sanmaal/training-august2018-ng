import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
  private pokemons: Pokemon[] = [];
  private catchedPokemons: Pokemon[] = [];

  private pokemonsPage = 1;
  private catchedPokemonsPage = 1;
  private limit = 12;

  get pokemons$() {
    return this.pokemons;
  }
  get catchedPokemons$() {
    return this.catchedPokemons;
  }

  set pokemonsPage$(numb: number) {
    this.pokemonsPage += numb;
  }
  set catchedPokemonsPage$(numb: number) {
    this.catchedPokemonsPage += numb;
  }

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.host}/pokemons/?_page=${this.pokemonsPage}&_limit=${this.limit}`)
      .pipe(
        tap((pokemons: Pokemon[]) => this.pokemons = this.pokemons.concat(...pokemons)),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getCathcedPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(
      `${environment.host}/pokemons/catched/?_page=${this.catchedPokemonsPage}&_limit=${this.limit}`,
      httpOptions
    )
      .pipe(
        tap((pokemons: Pokemon[]) => this.catchedPokemons = this.catchedPokemons.concat(...pokemons)),
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
        tap((res: Pokemon[]) => this.catchedPokemons = this.catchedPokemons.concat(...res)),
        catchError(this.handleError<any>(`catchPokemon ${id}`))
      );
  }

  checkCatched(id: string): void | Pokemon {
    return this.catchedPokemons.find( pokemon =>
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
