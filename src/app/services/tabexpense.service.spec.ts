import { TestBed } from '@angular/core/testing';

import { TabexpenseService } from './tabexpense.service';

describe('TabexpenseService', () => {
  let service: TabexpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabexpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
