import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { UserService } from '../../shared/services/user.service';
import { Pokemon } from '../../shared/models/pokemon';
 
@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css'],
})
export class AllPokemonsComponent implements OnInit {
  user: any;
  pokemons: Pokemon[] = [];
  page: number = 1;
  isFetching: boolean = false;
  isFetchedAll: boolean = false;
  errorMessage: any = null;

  constructor(
    private pokemonsService: PokemonsService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.user.subscribe(data => this.user = data);
    this.getPokemons();
  }

  getPokemons(): void {
    this.isFetching = true;
    this.pokemonsService
      .getAllPokemons(this.page)
      .subscribe(
        (data: Pokemon[]) => {
          this.pokemons = this.pokemons.concat(data);
          this.page = this.page + 1;
          this.isFetching = false;
          if (data.length < 16) this.isFetchedAll = true;  
        },
        error => {
          //do something else /shrug
          this.errorMessage = error.error;
        },
      )
  }

  handleCatch(id: number): void {
    this.pokemonsService
      .catchPokemon(id)
      .subscribe(
        data => {
          const pokemon = this.pokemons.find(pok => pok.id === id);
          pokemon.date = data;
        },
        error => {
          this.errorMessage = error.error;
        }
      )
  }
}
