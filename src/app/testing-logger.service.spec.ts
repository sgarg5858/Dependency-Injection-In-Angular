import { TestBed } from '@angular/core/testing';

import { TestingLoggerService } from './testing-logger.service';

describe('TestingLoggerService', () => {
  let service: TestingLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
