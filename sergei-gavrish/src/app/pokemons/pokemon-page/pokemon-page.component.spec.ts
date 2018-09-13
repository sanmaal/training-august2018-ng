import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

import { PokemonPageComponent } from './pokemon-page.component';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { Pokemon } from '../../shared/models/pokemon';

describe('PokemonPageComponent', () => {
  let component: PokemonPageComponent;
  let fixture: ComponentFixture<PokemonPageComponent>;
  
  const fakeActivatedRoute = {
    snapshot: {
      url: '/pokemon/5b95001c76e9652d94bc0468',
    }
  };
  let pokemon: Pokemon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ PokemonPageComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    }).overrideComponent(PokemonPageComponent, {
      set: {
        providers: [
          {
            provide: PokemonsService,
            useClass: Pokemon,
          }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPageComponent);
    component = fixture.componentInstance;
    pokemon = fixture.debugElement.injector.get(PokemonsService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
