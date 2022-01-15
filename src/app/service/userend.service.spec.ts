import { TestBed } from '@angular/core/testing';

import { UserendService } from './userend.service';

describe('UserendService', () => {
  let service: UserendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
