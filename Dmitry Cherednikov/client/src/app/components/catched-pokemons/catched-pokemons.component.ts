import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { UserService } from '../../shared/services/user.service';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'app-catched-pokemons',
  templateUrl: './catched-pokemons.component.html',
  styleUrls: ['./catched-pokemons.component.css'],
})
export class CatchedPokemonsComponent implements OnInit {
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
    this.userService.user.subscribe(data => this.user = data)
    this.getPokemons();
  }

  getPokemons(): void {
    this.errorMessage = null;
    this.isFetching = true;
    this.pokemonsService
      .getCatchedPokemons(this.page)
      .subscribe(
        (data: Pokemon[]) => {
          this.pokemons = this.pokemons.concat(data);
          this.page = this.page + 1;
          this.isFetching = false;
          if (data.length < 16) this.isFetchedAll = true;
        },
        error => {
          this.errorMessage = error.statusText;
          this.isFetching = false;
        },
      )
  }
}
