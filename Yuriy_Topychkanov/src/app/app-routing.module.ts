import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonsListComponent } from "./pokemons-list/pokemons-list.component";
import { CatchedPokemonsListComponent } from "./catched-pokemons-list/catched-pokemons-list.component";
import { AuthenticationService } from "./services/authentication/authentication.service";
import { AuthGuardService } from "./services/auth-guard/auth-guard.service";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

const appRoutes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'catched-pokemons', component: CatchedPokemonsListComponent, canActivate: [ AuthGuardService ] },
  { path: 'pokemon/:id', component: PokemonDetailComponent, canActivate: [ AuthGuardService ] }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

  constructor(private auth: AuthenticationService) {

  }

}
