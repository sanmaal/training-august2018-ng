import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonsList } from './pokemons-list';
import { Pokemon } from './pokemon';
import { environment } from '../../../environments/environment';
import { ErrorService } from '../../shared/error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  private pokemonsUrl = `${environment.host}pokemons/`;

  getPokemons(page: number): Observable<PokemonsList> {
    return this.http.get<PokemonsList>(`${this.pokemonsUrl}page/${page}`, httpOptions)
      .pipe(
        catchError(this.errorService.handleError<PokemonsList>())
      );
  }

  getCaughtPokemons(page: number): Observable<PokemonsList> {
    return this.http.get<PokemonsList>(`${this.pokemonsUrl}caught/page/${page}`, httpOptions)
      .pipe(
        catchError(this.errorService.handleError<PokemonsList>())
      );
  }

  getPokemon(id: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonsUrl}${id}`)
      .pipe(
        catchError(this.errorService.handleError<Pokemon>())
      );
  }

  catchPokemon(id: number): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.pokemonsUrl}${id}/catch`, httpOptions)
      .pipe(
        catchError(this.errorService.handleError<Pokemon>())
      );
  }
}
