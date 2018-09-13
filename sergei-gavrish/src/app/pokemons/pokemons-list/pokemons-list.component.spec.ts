import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonsListComponent } from './pokemons-list.component';
import { PokemonsListPageComponent } from '../pokemons-list-page/pokemons-list-page.component';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';
import { NgLetModule } from '../../shared/directives/ngLet';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgLetModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        PokemonsListComponent,
        PokemonsListPageComponent,
        PokemonListItemComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
