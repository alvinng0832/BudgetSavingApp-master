import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { storage } from 'firebase';

describe('StorageService', () => {
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService
      ]
    })
    storageService = TestBed.get(StorageService);
  });

  it('Storage Service should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it('saveToLocalStorage() | getFromLocalStorage() | Test Cases', (doneFn: DoneFn) => {
    const object = { test: 'Changed Value' }
    const actual = storageService.saveToLocalStorage('test', object);
    const expected = storageService.getFromLocalStorage('test').then((val) => {
      console.log(val);
      expect(val).toEqual(object);
      doneFn();
    });
  });

  it('removeFromLocalStorage() | should remove key from Local Storage', (doneFn: DoneFn) => {
    const object = { test: 'Test' };
    const actual = storageService.saveToLocalStorage('test', object);
    storageService.getFromLocalStorage('test').then((val) => {
      console.log('stored in Local', val);
    });
    storageService.removeFromLocalStorage('test').then((val: void) => {
      expect(val).toBe(undefined);
      doneFn();
    });
  });

  it('clearLocalStorage() | Should clear Everything from Local Storage'), (doneFn: DoneFn) => {
    const object = { test: 'Test' };
    storageService.saveToLocalStorage('test', object);
    storageService.getFromLocalStorage('test').then((val) => {
      console.log('stored in Local', val);
    });
    storageService.clearLocalStorage().then((val: void) => {
      expect(val).toBe(undefined);
      doneFn();
    });
  };
  

});
