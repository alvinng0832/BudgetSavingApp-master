import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Expense } from 'src/models/expense';
import {UserService} from 'src/app/user.service'
import { firestore } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  documentRef: any;
  uid: any
  email: string;
  collectionName = "Expenses"
  user: any;
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private userService: UserService) {
   

    this.user = JSON.parse(localStorage.getItem('user'));
  }

  addExpense(expense: Expense){
    return this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).add(expense)
  }
  read_students() {
    return this.firestore.collection('users').doc(this.user.uid).collection(this.collectionName).snapshotChanges();
  }
  update_student(expenseID, expense) {
    this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).doc(expenseID).update(expense);
  }

  delete_student(expense_id) {
    this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).doc(expense_id).delete()
  }


  userEmail() {
    return this.afAuth.auth.onAuthStateChanged(ds => {

    })
    
  }

}