import { TestBed } from '@angular/core/testing';

import { AppOwnerService } from './app-owner.service';

describe('AppOwnerService', () => {
  let service: AppOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
