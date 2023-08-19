import { TestBed } from '@angular/core/testing';

import { TauxChangeService } from './taux-change.service';

describe('TauxChangeService', () => {
  let service: TauxChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TauxChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
