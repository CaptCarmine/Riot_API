import { TestBed } from '@angular/core/testing';

import { RiotAPIService } from './riot-api.service';

describe('RiotAPIService', () => {
  let service: RiotAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiotAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
