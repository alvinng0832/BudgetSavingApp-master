import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { stringify } from 'querystring';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


// JSON "set" example
async saveToLocalStorage(key: string, value: any) {
  await Plugins.Storage.set({
    key: key,
    value: JSON.stringify(value)
  });
}

// JSON "get" example
async getFromLocalStorage(key:string): Promise<any> {
  const ret = await Plugins.Storage.get({key});
  return JSON.parse(ret.value);
}

async removeFromLocalStorage(key: string): Promise<void> {
  return await Plugins.Storage.remove({key});
}

// Clear the storage if a user logs out or reset the account.
async clearLocalStorage() : Promise<void> {
  await Plugins.Storage.clear();
}

}
