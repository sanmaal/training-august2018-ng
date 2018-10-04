import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PokemonsApiService {
  private apiUrl = environment.apiUrl;
  private authToken = this.cookieService.get("currToken");

  getPokemons(caught, page, limit = 20): Observable<Pokemon[]> {
    const requestParams = `?page=${page}&limit=${limit}`;

    if (this.authToken) {
      return this.http.get<Pokemon[]>(
        `${this.apiUrl}/caughtPokemons${requestParams}${
          caught ? "" : "&all=true"
        }`
      );
    }
    if (!caught) {
      return this.http.get<Pokemon[]>(
        `${this.apiUrl}/pokemons${requestParams}`
      );
    }
  }

  getPokemon(id): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/getCertain/${id}`);
  }

  catchPokemon(id): Observable<any> {
    const date = new Date(),
      hours = date.getHours(),
      mins = date.getMinutes(),
      readableDate = `${date.toDateString()}, ${hours}:${mins}`,
      data = {
        id: id,
        date: readableDate
      };
    return this.http.post<any>(`${this.apiUrl}/catchPokemon`, data);
  }

  leavePokemon(id): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/leavePokemon/${id}`);
  }

  constructor(private http: HttpClient, private cookieService: CookieService) {}
}
