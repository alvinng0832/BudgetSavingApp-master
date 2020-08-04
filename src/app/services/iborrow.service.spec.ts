import { TestBed } from '@angular/core/testing';

import { IborrowService } from './iborrow.service';

describe('IborrowService', () => {
  let service: IborrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IborrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
