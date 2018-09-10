import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'pokemons', component: PokemonsListComponent,
  },
  {
    path: 'pokemons/cathced', component: PokemonsListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pokemon/:id', component: PokemonItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
