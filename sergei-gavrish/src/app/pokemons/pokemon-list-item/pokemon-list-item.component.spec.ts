import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../shared/services/pokemons.service';

import { PokemonListItemComponent } from './pokemon-list-item.component';
import { PokemonPageComponent } from '../pokemon-page/pokemon-page.component';

describe('PokemonListItemComponent', () => {
  let component: PokemonListItemComponent;
  let fixture: ComponentFixture<PokemonListItemComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      url: '/pokemon/5b95001c76e9652d94bc0468',
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        PokemonListItemComponent,
        PokemonPageComponent,
      ],
      providers: [
        PokemonsService,
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListItemComponent);
    component = fixture.componentInstance;
    component.pokemon = {
      _id: '5b95001c76e9652d94bc0468',
      id: 1,
      name: 'bulbasaur',
    };
    component.isLoggedIn = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
