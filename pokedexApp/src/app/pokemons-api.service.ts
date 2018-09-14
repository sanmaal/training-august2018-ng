import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokemonsApiService {
  private apiUrl = "http://localhost:3000/api";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getPokemons(authToken, caught, page, limit = 20): Observable<Pokemon[]> {
    const requestParams = `?page=${page}&limit=${limit}`;

    if (authToken) {
      const header = { token: "" };
      header.token = authToken;

      return this.http.get<Pokemon[]>(
        `${this.apiUrl}/caughtPokemons${requestParams}${
          caught ? "" : "&all=true"
        }`,
        {
          headers: header
        }
      );
    }
    if (!caught) {
      return this.http.get<Pokemon[]>(
        `${this.apiUrl}/pokemons${requestParams}`
      );
    }
  }

  getPokemon(id, token): Observable<Pokemon> {
    const header = { token: "" };
    header.token = token;
    return this.http.get<Pokemon>(`${this.apiUrl}/getCertain/${id}`, {
      headers: header
    });
  }

  catchPokemon(id, token): Observable<any> {
    const header = { token: "" };
    header.token = token;
    const date = new Date(),
      hours = date.getHours(),
      mins = date.getMinutes(),
      readableDate = `${date.toDateString()}, ${hours}:${mins}`,
      data = {
        id: id,
        date: readableDate
      };
    return this.http.post<any>(`${this.apiUrl}/catchPokemon`, data, {
      headers: header
    });
  }

  leavePokemon(id, token): Observable<any> {
    const header = { token: "" };
    header.token = token;
    return this.http.get<any>(`${this.apiUrl}/leavePokemon/${id}`, {
      headers: header
    });
  }

  constructor(private http: HttpClient) {}
}
