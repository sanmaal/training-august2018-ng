import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { CatchedListComponent } from './catched-list/catched-list.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'pokemons', component: PokemonsListComponent,
  },
  {
    path: 'pokemons/cathced', component: CatchedListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pokemon/:id', component: PokemonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
