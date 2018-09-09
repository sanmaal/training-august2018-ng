import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchedPageComponent } from './catched-page.component';

describe('CatchedPageComponent', () => {
  let component: CatchedPageComponent;
  let fixture: ComponentFixture<CatchedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
