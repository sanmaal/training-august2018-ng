import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { AuthService } from '../../shared/services/auth.service';

import { PokemonsListComponent } from './pokemons-list.component';
import { PokemonsListPageComponent } from '../pokemons-list-page/pokemons-list-page.component';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';
import { NgLetModule } from '../../shared/directives/ngLet';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  const activatedRoute_1 = {
    snapshot: {
      data: {
        page: 'catched'
      },
    },
  };

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
      ],
      providers: [
        PokemonsService,
        AuthService,
        {
          provide: ActivatedRoute,
          useValue: activatedRoute_1,
        }
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

  it('should return catched pokemons', () => {
    expect(component.getPokemons()).toEqual([]);
  });

  it('loadPage have been called', () => {
    spyOn(component, 'loadPage');
    component.loadPage();
    expect(component.loadPage).toHaveBeenCalled();
  });

});

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  const activatedRoute_2 = {
    snapshot: {
      data: {},
    },
  };

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
      ],
      providers: [
        PokemonsService,
        AuthService,
        {
          provide: ActivatedRoute,
          useValue: activatedRoute_2,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return pokemons', () => {
    expect(component.getPokemons()).toEqual([]);
  });

  it('loadPage have been called', () => {
    spyOn(component, 'loadPage');
    component.loadPage();
    expect(component.loadPage).toHaveBeenCalled();
  });

});
