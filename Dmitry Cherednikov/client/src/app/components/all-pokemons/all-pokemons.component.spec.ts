import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllPokemonsComponent } from './all-pokemons.component';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { CatchPipe } from '../../shared/pipes/catch.pipe';
import { LoadingPipe } from '../../shared/pipes/loading.pipe'; 
import { of } from 'rxjs';

describe('AllPokemonsComponent', () => {
  let component: AllPokemonsComponent;
  let fixture: ComponentFixture<AllPokemonsComponent>;
  let dummyPokemons = [
    { name: "bulbasaur", id: 1, },
    { name: "ivysaur",id: 2 },
    { name: "venusaur", id: 3 },
    { name: "charmander", id: 4 },
    { name: "charmeleon", id: 5 },
    { name: "charizard", id: 6 },
    { name: "squirtle", id: 7 },
    { name: "wartortle", id: 8 },
    { name: "blastoise", id: 9 },
    { name: "caterpie", id: 10 },
    { name: "metapod", id: 11 },
    { name: "butterfree", id: 12 },
    { name: "weedle", id: 13 },
    { name: "kakuna",id: 14 },
    { name: "beedrill",id: 15 },
    { name: "pidgey", id: 16 },
  ];

  let pokemonsService =  {
    getAllPokemons: () => {
      return of(dummyPokemons);
    },

    catchPokemon: (id) => {
      return of('15.09.2018, 14:30:27');
    }
  } 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ 
        AllPokemonsComponent,
        CatchPipe,
        LoadingPipe, 
      ],
      providers: [{ provide: PokemonsService, useValue: pokemonsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive pokemons on first initialization action', () => {
    expect(component.pokemons).toEqual(dummyPokemons);
    expect(component.page).toBe(2);
    expect(component.isFetching).toEqual(false);
    expect(component.isFetchedAll).toEqual(false);
  })

  it('should change isFetchedAll thingy if it fetched less than 16 poks', () => {
    dummyPokemons = [{ name: "bulbasaur", id: 1 }, { name: "ivysaur",id: 2 }];
    component.getPokemons();
    expect(component.isFetchedAll).toEqual(true);
  })

  it('should handle handleCatch action', () => {
    component.handleCatch(1);
    expect(component.pokemons[0].date).toEqual('15.09.2018, 14:30:27');
  })
});
