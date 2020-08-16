import { Injectable } from '@angular/core';

interface Item{
  Name: string;
  Description: string;
  TotalAmount: string;
}
const ITEMS_KEY ="my-items"

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private storage: Storage) { }

  addItem(item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  getItems():Promise<Item[]>{
    return this.storage.get(ITEMS_KEY);
  }
}
