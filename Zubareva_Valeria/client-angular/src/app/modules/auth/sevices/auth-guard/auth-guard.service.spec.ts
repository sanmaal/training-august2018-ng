import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from '../auth/auth.service';

describe('AuthGuardService', () => {
  let authService: AuthService;
  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    authServiceStub = {
      isAuth: false,
    };

    TestBed.configureTestingModule({
      providers: [AuthGuardService, {provide: AuthService, useValue: authServiceStub }]
    });
  });


  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
