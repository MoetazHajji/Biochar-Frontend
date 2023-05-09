import { TestBed } from '@angular/core/testing';

import { LeaveAuthService } from './leave-auth.service';

describe('LeaveAuthService', () => {
  let service: LeaveAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
