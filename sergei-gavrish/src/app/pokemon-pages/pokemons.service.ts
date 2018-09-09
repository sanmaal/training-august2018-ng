import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemons(page: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemons/?_page=${page}&_limit=${limit}`)
      .pipe(
        tap(_ => console.log('fetched pokemons')),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getCathcedPokemons(page: number, limit: number): Observable<Pokemon[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': ''
      })
    };

    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemons/catched/?_page=${page}&_limit=${limit}`, httpOptions)
      .pipe(
        tap(_ => console.log('fetched pokemons')),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getPokemon(id: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`http://localhost:3000/pokemons/${id}`)
      .pipe(
        tap(_ => console.log('fetched pokemon')),
        catchError(this.handleError<Pokemon>(`getPokemon ${id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
