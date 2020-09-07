import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {UserService} from 'src/app/user.service'
import { AngularFireAuth } from '@angular/fire/auth';

 interface Transaction {
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
export class TransactionService {
  
  documentRef: any;
  uid: any
  user: any
  email: string;
  collectionName = "Transaction"

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private userService: UserService) {
   

    this.uid = this.afAuth.auth.currentUser.uid // put this inside the doc
  }

  addTransaction(transaction: Transaction){
    return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).add(transaction)
  }
  getTransaction() {
    return this.firestore.collection('users').doc(this.uid).collection(this.collectionName).snapshotChanges();
  }
  updateTransaction(transactionID, transaction) {
    this.firestore.collection("users").doc(this.uid).collection(this.collectionName).doc(transactionID).update(transaction);
  }

  deleteTransaction(transaction_ID) {
    this.firestore.collection("users").doc(this.uid).collection(this.collectionName).doc(transaction_ID).delete()
  }



}