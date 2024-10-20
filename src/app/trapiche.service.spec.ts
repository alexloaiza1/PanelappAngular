import { TestBed } from '@angular/core/testing';

import { TrapicheService } from './trapiche.service';

describe('TrapicheService', () => {
  let service: TrapicheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrapicheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
