import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonsComponent } from "./pokemons.component";

import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { APP_BASE_HREF } from '@angular/common';

describe("PokemonsComponent", () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsComponent],
      imports: [RouterModule, HttpModule, HttpClientModule, RouterModule.forRoot([])],
      providers: [CookieService, { provide: APP_BASE_HREF, useValue: "/" }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
