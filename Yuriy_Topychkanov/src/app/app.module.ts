import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from "./app-routing.module";


import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';
import { UserFormsModule } from "./user-forms/user-forms.module";
import { HttpClientModule } from "@angular/common/http";
import { CatchedPokemonsListComponent } from './catched-pokemons-list/catched-pokemons-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FooterComponent,
    HeaderComponent,
    MainBlockComponent,
    PokemonsListComponent,
    FlippingCardComponent,
    CatchedPokemonsListComponent,
  ],
  imports: [
    BrowserModule,
    UserFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
