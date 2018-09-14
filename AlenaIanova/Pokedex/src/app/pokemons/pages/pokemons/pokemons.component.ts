import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../shared/pokemons.service';
import { PokemonsList } from '../../shared/pokemons-list';
import { NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  // TODO: move data and operations with data to PokemonsService

  public pokemonsList: PokemonsList;
  navigationSubscription;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.pokemonsList = new PokemonsList();
    this.loadMore();
  }

  ngOnInit() {
  }

  loadMore = (): void => {
    this.pokemonsService.getPokemons(this.pokemonsList.page + 1)
      .subscribe(newPokemonsList => {
        this.pokemonsList.addPokemons(newPokemonsList);
      });
  }

  handleCatchClick = (pokemonId: number): void => {
    this.pokemonsService.catchPokemon(pokemonId)
      .subscribe(caughtPokemon => {
        if (caughtPokemon) {
          this.pokemonsList.pokemons = this.pokemonsList.pokemons.map(pokemon => {
            if (pokemon.id === caughtPokemon.id) {
              pokemon.catchInfo = caughtPokemon.catchInfo;
            }
            return pokemon;
          });
        }
      });
  }

  redirectToPokemon = (pokemonId: number): void => {
    this.router.navigate([`/pokemons/${pokemonId}`]);
  }

}
