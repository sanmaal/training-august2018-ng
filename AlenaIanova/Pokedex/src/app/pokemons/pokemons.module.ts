import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsService } from './shared/pokemons.service';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CaughtPokemonsComponent } from './pages/caught-pokemons/caught-pokemons.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonPicturePipe } from './shared/pokemon-picture.pipe';
import { BoolToStringPipe } from './shared/bool-to-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    AppMaterialModule
  ],
  declarations: [
    PokemonsComponent,
    PokemonCardComponent,
    PokemonsListComponent,
    CaughtPokemonsComponent,
    PokemonDetailsComponent,
    PokemonPicturePipe,
    BoolToStringPipe
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
