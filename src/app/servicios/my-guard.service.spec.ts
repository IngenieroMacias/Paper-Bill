import { TestBed } from '@angular/core/testing';

import { MyGuardService } from './my-guard.service';

describe('MyGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyGuardService = TestBed.get(MyGuardService);
    expect(service).toBeTruthy();
  });
});
