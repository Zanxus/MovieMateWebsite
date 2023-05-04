import { TestBed } from '@angular/core/testing';

import { TrackedMediaService } from './tracked-media.service';

describe('TrackedMediaService', () => {
  let service: TrackedMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackedMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
