import { TestBed } from '@angular/core/testing';

import { PescaCarritoService } from './PescaCarritoService';

describe('PescaCarritoService', () => {
  let service: PescaCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PescaCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
