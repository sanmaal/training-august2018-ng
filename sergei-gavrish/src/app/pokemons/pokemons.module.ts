import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PokemonsRoutingModule,
  ],
  declarations: [PokemonsListComponent, PokemonsPageComponent, PokemonItemComponent]
})
export class PokemonsModule { }
