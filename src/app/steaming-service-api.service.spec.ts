import { TestBed } from '@angular/core/testing';

import { SteamingServiceAPIService } from './steaming-service-api.service';

describe('SteamingServiceAPIService', () => {
  let service: SteamingServiceAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamingServiceAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
