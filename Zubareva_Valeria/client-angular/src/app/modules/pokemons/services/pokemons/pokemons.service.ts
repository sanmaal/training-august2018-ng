import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pokemon } from "../../../../domain/Pokemon";

@Injectable()
export class PokemonsService {

  catchPokemonRequest: string = 'http://localhost:5000/api/pokemons';
  constructor(private http: HttpClient) {}

  public getPokemons(offset, limit) {
    return this.http.get(`http://localhost:5000/api/pokemons?offset=${offset}&limit=${limit}`);
  }

  public getCaughtPokemons(offset, limit) {
    return this.http.get(`http://localhost:5000/api/pokemons/caught-pokemons?offset=${offset}&limit=${limit}`);
  }

 public catchPokemon(pokemon: Pokemon) {
    return this.http.put(this.catchPokemonRequest, {pokemon, time: Date.now()})
 }

 public getPokemonById(id) {
    return this.http.get(`http://localhost:5000/api/pokemons/${id}`)
 }
}
