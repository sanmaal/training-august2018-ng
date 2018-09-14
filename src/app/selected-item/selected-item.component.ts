import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  public items;

  constructor(private _pokemonList: PokemonService,
              private _AuthService: AuthService,
  ) { }

  ngOnInit() {
    console.log('try to load cathed');
    if (this._pokemonList.getCatched.length === 0) {
      this._pokemonList.getCatched()
      .subscribe((data: Array<any>) => {
        this.items = data.sort((pokemon, next) => pokemon.id - next.id);
        // console.log(data);
      });
    } else {
      this.items = this._pokemonList.getCatched;
    }
  }

}
