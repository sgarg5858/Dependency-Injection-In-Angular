import { TestBed } from '@angular/core/testing';

import { DevelopmentLoggerService } from './development-logger.service';

describe('DevelopmentLoggerService', () => {
  let service: DevelopmentLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopmentLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
