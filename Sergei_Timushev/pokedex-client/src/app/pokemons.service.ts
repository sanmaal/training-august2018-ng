import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Pokemon } from "./domain/Pokemon";

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) {}

  private pokemonsUrl: string = 'http://localhost:3000/pokemons'

  public getPokemons(page): Observable<Array<any>> {
    return this.http.get<any[]>(`${this.pokemonsUrl}/${page}`);
  }

  public showPokemon(id): Observable<any> {
    return this.http.get<any>(`${this.pokemonsUrl}/pokemon/${id}`);
  }

  public getCatchedPokemons(page): Observable<any> {
    return this.http.get<any>(`${this.pokemonsUrl}/caught/${page}`);
  }

  public catchPokemon(userId, pokemonid): Observable<any> {
    return this.http.put<any>(`${this.pokemonsUrl}/catch/${pokemonid}`);
  }
}
