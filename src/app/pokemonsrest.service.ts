import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsrestService {
  //private baseUrl = 'src/pokemon.json';
  private baseUrl = 'http://localhost:5000';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/pokemons', this.httpOptions)
      .pipe(
        tap(pokemons => {//console.log('fetched pokemons');
        //console.log(pokemons);
        return pokemons;
      }));
  }

  
  getChunkPokemons(page, limit): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/pokemons/${page}/${limit}`, this.httpOptions)
      .pipe(
        tap(pokemons => {//console.log('fetched pokemons');
        //console.log(pokemons);
        return pokemons;
      }));
  }

  id = 1;

  getPokemonByID(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/pokemon/' + this.id, this.httpOptions)
      .pipe(
        tap(pokemon => {//console.log('fetched pokemons');
        //console.log(pokemons);
        return pokemon;
      }));
  }

  constructor(private http: HttpClient) { }
}
