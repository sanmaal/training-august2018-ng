import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PokemonsComponent} from './pokemons/pokemons.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/pokes', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'pokes', component: PokemonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
