import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { AuthService } from '../../shared/services/auth.service';

import { PokemonsListComponent } from './pokemons-list.component';
import { PokemonsPageComponent } from '../pokemons-page/pokemons-page.component';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        PokemonsListComponent,
        PokemonsPageComponent,
        PokemonListItemComponent,
      ],
      providers: [
        PokemonsService,
        AuthService,
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

  it('should return pokemons', () => {
    expect(component.getPokemons()).toEqual([]);
  });

  it('loadPage have been called', () => {
    spyOn(component, 'loadPage');
    component.loadPage();
    expect(component.loadPage).toHaveBeenCalled();
  });

  it('call loadPage', () => {
    expect(component.loadPage());
  });

});
