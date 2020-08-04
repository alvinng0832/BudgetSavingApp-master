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
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private userService: UserService) {
   
    this.afAuth.auth.onAuthStateChanged((user) => {
      console.log(user)
      this.uid = user.uid
      this.email = user.email
    })
    

  }

  addExpense(expense: Expense){
    return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).add(expense)
  }
  read_students() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
  update_student(recordID, expense) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(expense);
  }

  delete_student(expense_id) {
    this.firestore.doc(this.collectionName + '/' + expense_id).delete();
  }


  userEmail() {
    return this.afAuth.auth.onAuthStateChanged(ds => {

    })
    
  }

}