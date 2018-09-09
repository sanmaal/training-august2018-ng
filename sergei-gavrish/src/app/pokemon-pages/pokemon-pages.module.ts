import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { CatchedPageComponent } from './catched-page/catched-page.component';

@NgModule({
  imports: [
    CommonModule,
    PokemonsRoutingModule,
  ],
  declarations: [MainPageComponent, PokemonDetailComponent, CatchedPageComponent]
})
export class PokemonPagesModule { }
