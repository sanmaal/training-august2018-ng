import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

describe('AuthService', () => {
  let httpClientSpy: { post: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      providers: [AuthService, {provide: HttpClient, useValue:  httpClientSpy }]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should check auth', inject([AuthService], (service: AuthService) => {
    expect(service.checkAuth()).toBe(false);
  }));

  it('register method should call HttpClient post once', inject([AuthService], (service: AuthService) =>  {
    httpClientSpy.post.and.returnValue(new Observable);

    service.register("name", "email", "password");
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  }));

  it('login method should call HttpClient post once', inject([AuthService], (service: AuthService) =>  {
    httpClientSpy.post.and.returnValue(new Observable);

    service.login("email", "password");
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  }));

  it('should be false auth after logout', inject([AuthService], (service: AuthService) =>  {
    service.logOut();
    expect(service.isAuth).toBe(false);
  }));

  it('should be true auth after setToken', inject([AuthService], (service: AuthService) =>  {
    service.setToken("someToken");
    expect(service.isAuth).toBe(true);
  }));
});
