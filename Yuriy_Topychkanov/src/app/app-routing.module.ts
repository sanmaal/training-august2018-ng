import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonsListComponent } from "./pokemons-list/pokemons-list.component";

const appRoutes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'catched-pokemons', component: PokemonsListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
