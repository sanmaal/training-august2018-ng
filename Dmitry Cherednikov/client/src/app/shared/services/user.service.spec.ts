import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClientTestingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [UserService]
    });
    service = TestBed.get(UserService);
    httpClient = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
