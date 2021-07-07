import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { ItemInfoComponent } from '../item-info/item-info.component';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item;

  constructor(public dialog: MatDialog,
              private _pokemonList: PokemonService,
  ) { }

  public openItem() {
    this.dialog.open(ItemInfoComponent, {
      data: {
        name: this.item.name,
        id: this.item.id
      }
    });
  }

  public catchPokemon(name, id) {
    this._pokemonList.catch(name, id, 'Bob', '1')
      .subscribe(data => console.log(data));
    console.log('catch');
  }

}
