import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
  private pokemonsArray: Pokemon[] = [];
  private catchedPokemonsArray: Pokemon[] = [];

  private pokemonsPage = 1;
  private catchedPage = 1;
  private limit = 12;

  get pokemons() {
    return this.pokemonsArray;
  }
  get catchedPokemons() {
    return this.catchedPokemonsArray;
  }

  set increasePokemonsPage(numb: number) {
    this.pokemonsPage += numb;
  }
  set increasecatchedPage(numb: number) {
    this.catchedPage += numb;
  }

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemons/?_page=${this.pokemonsPage}&_limit=${this.limit}`)
      .pipe(
        tap((pokemons: Pokemon[]) => this.pokemonsArray = this.pokemonsArray.concat(...pokemons)),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getCathcedPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemons/catched/?_page=${this.catchedPage}&_limit=${this.limit}`, httpOptions)
      .pipe(
        tap((pokemons: Pokemon[]) => this.catchedPokemonsArray = this.catchedPokemonsArray.concat(...pokemons)),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getPokemon(id: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`http://localhost:3000/pokemons/${id}`)
      .pipe(
        tap(_ => console.log('Pokemon was fetched successfully')),
        catchError(this.handleError<Pokemon>(`getPokemon ${id}`))
      );
  }

  catchPokemon(id: string): Observable<any> {
    const body = new HttpParams()
    .set('id', id);
    return this.http.put('http://localhost:3000/pokemons/catch', body, httpOptions)
      .pipe(
        tap((res: Pokemon[]) => this.catchedPokemonsArray = this.catchedPokemonsArray.concat(...res)),
        catchError(this.handleError<any>(`catchPokemon ${id}`))
      );
  }

  checkIfCatched(id: number): void | Pokemon {
    return this.catchedPokemonsArray.find( pokemon =>
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
