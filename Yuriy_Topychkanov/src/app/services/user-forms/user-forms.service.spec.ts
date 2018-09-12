import { TestBed, inject } from '@angular/core/testing';

import { UserFormsService } from './user-forms.service';

describe('UserFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ UserFormsService ]
    });
  });

  it('should be created', inject([ UserFormsService ], (service: UserFormsService) => {
    expect(service).toBeTruthy();
  }));
});
