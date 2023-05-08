import { TestBed } from '@angular/core/testing';

import { MedicalcardService } from './medicalcard.service';

describe('MedicalcardService', () => {
  let service: MedicalcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
