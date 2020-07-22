import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Expense } from 'src/models/expense';
import {UserService} from 'src/app/user.service'
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  documentRef: any;

  constructor(private fireStore: AngularFirestore, private userService: UserService) {
   
    // this.documentRef = fireStore.collection("Expenses").doc(); // this one wrong

  }

  addExpense(expense: Expense){
    
    return this.fireStore.collection("Expenses").add(expense);
  }

}