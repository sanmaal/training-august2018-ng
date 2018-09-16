import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "../authentication/authentication.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) {
  }

  getPokemonsPerPage(page) {
    return this.http.get(`http://localhost:3000/?page=${page}`);
  }

  getCatchedPokemonsPerPage(page) {
    const token = this.auth.getToken();
    console.log(token);
    if (token) {
      this.auth.request(
        this.http.get(
          `http://localhost:3000/catched-pokemons/?page=${page}&token=${token}`,
        )
      )
        .subscribe((data) => console.log(data))
    }
  }

}
