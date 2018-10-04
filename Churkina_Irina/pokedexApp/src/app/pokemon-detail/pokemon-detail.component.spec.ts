import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonDetailComponent } from "./pokemon-detail.component";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

describe("PokemonDetailComponent", () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
      imports: [RouterModule.forRoot([]), HttpModule, HttpClientModule],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }, CookieService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
