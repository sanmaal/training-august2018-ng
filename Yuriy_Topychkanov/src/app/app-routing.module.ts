import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonsListComponent } from "./pokemons-list/pokemons-list.component";
import { CatchedPokemonsListComponent } from "./catched-pokemons-list/catched-pokemons-list.component";

const appRoutes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'catched-pokemons', component: CatchedPokemonsListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
