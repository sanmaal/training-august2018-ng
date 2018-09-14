import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { CaughtPokemonsComponent } from './pages/caught-pokemons/caught-pokemons.component';
import { AuthGuard } from '../shared/auth.guard';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'caught',
    component: CaughtPokemonsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: PokemonDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
