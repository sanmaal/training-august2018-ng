import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CatchedPageComponent } from './components/catched-page/catched-page.component';
import { RouterModule } from '@angular/router';
// import { routes } from './routes';

const routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'catched',
    component: CatchedPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    NavigationComponent,
    HomePageComponent,
    PokemonCardComponent,
    CatchedPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
