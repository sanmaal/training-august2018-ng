import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MainLogicComponent } from './main-logic.component';
import { MainViewComponent } from '../main-view/main-view.component';
import { NgLetModule } from '../../shared/directives/ngLet';

describe('MainLogicComponent', () => {
  let component: MainLogicComponent;
  let fixture: ComponentFixture<MainLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgLetModule,
      ],
      declarations: [
        MainLogicComponent,
        MainViewComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
