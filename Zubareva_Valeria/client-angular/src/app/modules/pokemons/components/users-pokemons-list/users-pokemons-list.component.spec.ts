import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { of } from 'rxjs/internal/observable/of';

import { UsersPokemonsListComponent } from './users-pokemons-list.component';
import { Pokemon } from '../../../../domain/Pokemon';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { AuthService } from '../../../auth/sevices/auth/auth.service';

describe('UsersPokemonsListComponent', () => {
  let component: UsersPokemonsListComponent;
  let fixture: ComponentFixture<UsersPokemonsListComponent>;

  let getCaughtPokemonsSpy: jasmine.Spy;

  const testPokemons: Pokemon[] = [
    {
      _id: '',
      id: 1,
      name: 'Pokemon1'
    },
    {
      _id: '',
      id: 2,
      name: 'Pokemon2'
    }
  ];

  beforeEach(async(() => {
    const authServiceStub = jasmine.createSpyObj('AuthService', ['checkAuth']);

    const pokemonsServiceStub = jasmine.createSpyObj('PokemonsService', ['getCaughtPokemons']);
    getCaughtPokemonsSpy = pokemonsServiceStub.getCaughtPokemons.and.returnValue( of(testPokemons) );

    TestBed.configureTestingModule({
      declarations: [ UsersPokemonsListComponent  ],
      providers: [{provide: PokemonsService, useValue: pokemonsServiceStub },
        {provide: AuthService, useValue: authServiceStub },],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
