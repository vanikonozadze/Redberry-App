import { TestBed } from '@angular/core/testing';

import { RealEstateManagerService } from './real-estate-manager.service';

describe('RealEstateManagerService', () => {
  let service: RealEstateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
