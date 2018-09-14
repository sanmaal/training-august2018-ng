import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CatchedPageComponent } from './components/catched-page/catched-page.component';
import { ModalSingInComponent } from './components/modal-sing-in/modal-sing-in.component';

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
    CatchedPageComponent,
    ModalSingInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
