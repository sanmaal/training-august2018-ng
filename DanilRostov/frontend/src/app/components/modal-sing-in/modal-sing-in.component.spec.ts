import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSingInComponent } from './modal-sing-in.component';

describe('ModalSingInComponent', () => {
  let component: ModalSingInComponent;
  let fixture: ComponentFixture<ModalSingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
