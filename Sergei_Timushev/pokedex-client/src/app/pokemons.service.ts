import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Pokemon } from "./domain/Pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  catchPokemonRequest: string = 'http://localhost:3000/pokemons';

  public getPokemons(page) {
    return this.http.get(`http://localhost:3000/pokemons/${page}`);
  }

  public getCaughtPokemons(page) {
    return this.http.get(`http://localhost:3000/pokemons/caught/${page}`, this.authService.getOptions());
  }

  public catchPokemon(pokemon: Pokemon) {
    return this.http.put(this.catchPokemonRequest, {pokemon, time: Date.now()}, this.authService.getOptions())
  }

  public showPokemon(id) {
    return this.http.get(`http://localhost:3000/pokemons/pokemon/${id}`, this.authService.getOptions())
  }

  public isPokemonCaughtByUser(pokemonUsersList) {
    pokemonUsersList = pokemonUsersList.map(item => item.user);
    if (this.authService.checkAuth()) {
      if (pokemonUsersList.includes(this.getUserId())) {
        return true;
      }
    }
    return false;
  }

  public isUserAuthorized() {
    return this.authService.checkAuth();
  }

  public getUserId() {
    return this.authService.getUserId();
  }
}
