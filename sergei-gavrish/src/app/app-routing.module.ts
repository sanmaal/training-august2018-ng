import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  },
  // {
  //   path: 'pokemons', component: PokemonsPageComponent,
  // },
  // {
  //   path: 'pokemons/cathced', component: ,
  // },
  // {
  //   path: 'pokemons/:id', component: PokemonDetailComponent,
  // },
  // {
  //   path: '**', component: 404
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
