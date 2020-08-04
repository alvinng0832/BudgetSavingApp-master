import { TestBed } from '@angular/core/testing';

import { IlentService } from './ilent.service';

describe('IlentService', () => {
  let service: IlentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
