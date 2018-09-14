import { TestBed } from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { UserDataService } from "./user-data.service";

describe("UserDataService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [HttpModule, HttpClientModule]
    }));

  it("should be created", () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });
});
