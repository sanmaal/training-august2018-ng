import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CatchedPokemonsComponent } from './catched-pokemons.component';
import { CatchPipe } from '../../shared/pipes/catch.pipe';
import { LoadingPipe } from '../../shared/pipes/loading.pipe'; 
import { PokemonsService } from '../../shared/services/pokemons.service';
import { of } from 'rxjs';

describe('CatchedPokemonsComponent', () => {
  let component: CatchedPokemonsComponent;
  let fixture: ComponentFixture<CatchedPokemonsComponent>;
  let dummyPokemons = [
    { name: "bulbasaur", id: 1, date: '15.09.2018, 14:30:27' },
    { name: "ivysaur",id: 2, date: '15.09.2018, 14:30:27' },
    { name: "venusaur", id: 3, date: '15.09.2018, 14:30:27' },
    { name: "charmander", id: 4, date: '15.09.2018, 14:30:27' },
    { name: "charmeleon", id: 5, date: '15.09.2018, 14:30:27' },
    { name: "charizard", id: 6, date: '15.09.2018, 14:30:27' },
    { name: "squirtle", id: 7, date: '15.09.2018, 14:30:27' },
    { name: "wartortle", id: 8, date: '15.09.2018, 14:30:27' },
    { name: "blastoise", id: 9, date: '15.09.2018, 14:30:27' },
    { name: "caterpie", id: 10, date: '15.09.2018, 14:30:27' },
    { name: "metapod", id: 11, date: '15.09.2018, 14:30:27' },
    { name: "butterfree", id: 12, date: '15.09.2018, 14:30:27' },
    { name: "weedle", id: 13, date: '15.09.2018, 14:30:27' },
    { name: "kakuna",id: 14, date: '15.09.2018, 14:30:27' },
    { name: "beedrill",id: 15, date: '15.09.2018, 14:30:27' },
    { name: "pidgey", id: 16, date: '15.09.2018, 14:30:27' },
  ];

  let pokemonsService =  {
    getCatchedPokemons: () => {
      return of(dummyPokemons);
    }
  } 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ 
        CatchedPokemonsComponent,
        CatchPipe,
        LoadingPipe,
       ],
      providers: [{ provide: PokemonsService, useValue: pokemonsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchedPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive pokemons on first initialization action', () => {
    expect(component.pokemons).toEqual(dummyPokemons);
    expect(component.isFetchedAll).toEqual(false);
  })

  it('should change isFetchedAll thingy if it fetched less than 16 poks', () => {
    dummyPokemons = [
      { name: "bulbasaur", id: 1, date: '15.09.2018, 14:30:27' }, 
      { name: "ivysaur",id: 2, date: '15.09.2018, 14:30:27' }
    ];
    component.getPokemons();
    expect(component.isFetchedAll).toEqual(true);
  })
});
