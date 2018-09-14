import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CatchedPokemonsComponent } from './catched-pokemons.component';
import { CatchPipe } from '../../shared/pipes/catch.pipe';
import { LoadingPipe } from '../../shared/pipes/loading.pipe'; 

describe('CatchedPokemonsComponent', () => {
  let component: CatchedPokemonsComponent;
  let fixture: ComponentFixture<CatchedPokemonsComponent>;

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
       ]
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
});
