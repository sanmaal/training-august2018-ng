import { TestBed } from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { PokemonsApiService } from "./pokemons-api.service";
import { CookieService } from 'ngx-cookie-service';

describe("PokemonsApiService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [],
      providers: [CookieService],
      imports: [HttpModule, HttpClientModule]
    }));

  it("should be created", () => {
    const service: PokemonsApiService = TestBed.get(PokemonsApiService);
    expect(service).toBeTruthy();
  });
});
