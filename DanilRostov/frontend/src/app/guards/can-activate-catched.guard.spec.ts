import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateCatchedGuard } from './can-activate-catched.guard';

describe('CanActivateCatchedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateCatchedGuard]
    });
  });

  it('should ...', inject([CanActivateCatchedGuard], (guard: CanActivateCatchedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
