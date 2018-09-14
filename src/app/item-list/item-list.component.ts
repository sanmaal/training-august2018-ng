import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { AuthService } from '../auth.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public items;

  constructor(private _pokemonList: PokemonService,
              private _AuthService: AuthService,
  ) { }

  ngOnInit() {
    console.log('try to load pokemons');
    if (this._pokemonList.getAllPokemons.length === 0) {
      // console.log('0000', this._pokemonList.getPokemons);
      this._pokemonList.getPokemons()
        .subscribe((data: Array<any>) => {
          this.items = this.getPokemons();
          // console.log(data);
        });
    } else {
      // console.log('11111', this._pokemonList.getPokemons);
      this.items = this.getPokemons();
    }
  }

  getPokemons(): Pokemon[] {
    return this._pokemonList.getAllPokemons;
  }

  getAuth() {
    return this._AuthService.getAuth;
  }
}
