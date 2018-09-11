import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsListPageComponent } from './pokemons-list-page/pokemons-list-page.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { CatchedListComponent } from './catched-list/catched-list.component';

@NgModule({
  imports: [
    CommonModule,
    PokemonsRoutingModule,
  ],
  declarations: [PokemonsListComponent, PokemonsListPageComponent, PokemonListItemComponent, PokemonPageComponent, CatchedListComponent]
})
export class PokemonsModule { }
