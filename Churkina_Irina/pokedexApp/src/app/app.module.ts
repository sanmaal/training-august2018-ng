import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MyHttpInterceptor } from "./http-interceptor";

import { AppComponent } from "./app.component";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, Routes } from "@angular/router";

import { UserDataService } from "./user-data.service";
import { PokemonsApiService } from "./pokemons-api.service";

import { APP_BASE_HREF } from "@angular/common";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    PokemonDetailComponent,
    LoginPageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
    CookieService,
    HttpClientModule,
    UserDataService,
    PokemonsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
