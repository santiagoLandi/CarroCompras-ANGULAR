import { TestBed } from '@angular/core/testing';

import { PescaDataService } from './pesca-data.service';

describe('PescaDataService', () => {
  let service: PescaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PescaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
