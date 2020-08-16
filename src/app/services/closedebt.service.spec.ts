import { TestBed } from '@angular/core/testing';

import { ClosedebtService } from './closedebt.service';

describe('ClosedebtService', () => {
  let service: ClosedebtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosedebtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
