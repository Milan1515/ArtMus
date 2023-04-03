import { TestBed } from '@angular/core/testing';

import { ExibitionsService } from './exibitions.service';

describe('ExibitionsService', () => {
  let service: ExibitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExibitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
