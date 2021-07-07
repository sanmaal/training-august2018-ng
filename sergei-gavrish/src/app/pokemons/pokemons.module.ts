import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchedListComponent } from './catched-list/catched-list.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PokemonsRoutingModule,
  ],
  declarations: [PokemonsListComponent, PokemonsPageComponent, PokemonListItemComponent, PokemonPageComponent, CatchedListComponent]
})
export class PokemonsModule { }
