import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { LoginPageComponent } from "./login-page/login-page.component";

const routes: Routes = [
  { path: "list", component: PokemonsComponent, data: { caught: false } },
  { path: "", component: WelcomePageComponent },
  { path: "detail/:id", component: PokemonDetailComponent },
  { path: "login", component: LoginPageComponent, data: { auth: true } },
  { path: "caught", component: PokemonsComponent, data: { caught: true } }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
