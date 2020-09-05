import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {UserService} from 'src/app/user.service'
import { AngularFireAuth } from '@angular/fire/auth';

 interface Expense {
  id?:string,
  FirstName: string,
  LastName: string,
  Amount: string,
  Description: string,
  Category: string,
  Tags: string,
  Date: Date
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  [x: string]: any;
  documentRef: any;
  uid: any
  email: string;
  collectionName = "Expenses"
  user: any;
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private userService: UserService) {
   

    this.uid = this.afAuth.auth.currentUser.uid
  }

  addExpense(expense: Expense){
    return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).add(expense)
  }
  read_students() {
    return this.firestore.collection('users').doc(this.uid).collection(this.collectionName).snapshotChanges();
  }
  update_student(expenseID, expense) {
    this.firestore.collection("users").doc(this.uid).collection(this.collectionName).doc(expenseID).update(expense);
  }

  delete_student(expense_id) {
    this.firestore.collection("users").doc(this.uid).collection(this.collectionName).doc(expense_id).delete()

    this.user =JSON.parse(localStorage.getItem('user'))
    this.uid = this.afAuth.auth.currentUser
  }

 

  userEmail() {
    return this.afAuth.auth.onAuthStateChanged(ds => {

    })
    
  }

}