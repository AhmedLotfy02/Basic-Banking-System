import { TestBed } from '@angular/core/testing';

import { BanKServiceService } from './ban-kservice.service';

describe('BanKServiceService', () => {
  let service: BanKServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanKServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
