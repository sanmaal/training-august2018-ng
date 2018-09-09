import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { CatchedPageComponent } from './catched-page/catched-page.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'pokemons', component: MainPageComponent,
  },
  {
    path: 'pokemons/cathced', component: CatchedPageComponent,
  },
  // {
  //   path: 'pokemons/cathced', component: CatchedPageComponent, canActivate: [AuthGuard],
  // },
  {
    path: 'pokemon/:id', component: PokemonDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
