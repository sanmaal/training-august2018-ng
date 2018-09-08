import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  },
  // {
  //   path: 'pokemons', component: MainPageComponent,
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
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
