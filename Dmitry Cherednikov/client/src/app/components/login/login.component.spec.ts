import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../shared/services/user.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('UserService', ['login']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      declarations: [ 
        LoginComponent, 
      ],
      providers: [
        UserService, { provide: UserService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    userServiceSpy = TestBed.get(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change submitted value when submit is called', () => {
    expect(component.submitted).toEqual(false);
    component.onSubmit();
    expect(component.submitted).toEqual(true);
  })

  it ('should not be called when form is invalid', () => {
    component.onSubmit();
    expect(userServiceSpy.login.calls.count()).toBe(0);
  });

  it ('should be called when form is valid', () => {
    userServiceSpy.login.and.returnValue({ subscribe: () => {}});

    component.loginForm.controls['name'].setValue("Adore");
    component.loginForm.controls['password'].setValue("123456");
    expect(component.loginForm.valid).toBeTruthy();

    component.onSubmit();
    expect(userServiceSpy.login.calls.count()).toBe(1);
  });

  it('getter should return loginForm controls', () => {
    expect(component.f).toEqual(component.loginForm.controls)
  })
});
