import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonsListPageComponent } from './pokemons-list-page.component';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component'


describe('PokemonsListPageComponent', () => {
  let component: PokemonsListPageComponent;
  let fixture: ComponentFixture<PokemonsListPageComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      url: '/pokemon/5b95001c76e9652d94bc0468',
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ PokemonsListPageComponent, PokemonListItemComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
