import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllPokemonsComponent } from './all-pokemons.component';
import { CatchPipe } from '../../shared/pipes/catch.pipe';
import { LoadingPipe } from '../../shared/pipes/loading.pipe'; 

describe('AllPokemonsComponent', () => {
  let component: AllPokemonsComponent;
  let fixture: ComponentFixture<AllPokemonsComponent>;

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
      ]
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
});
