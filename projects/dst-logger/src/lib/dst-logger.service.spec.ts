import { TestBed } from '@angular/core/testing';

import { DstLoggerService } from './dst-logger.service';

describe('DstLoggerService', () => {
  let service: DstLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DstLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
