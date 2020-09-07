import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

export interface LentDebts {
  Name: string,
  TotalAmount: string,
  Description: string,
}
@Injectable({
  providedIn: 'root'
})
export class ClosedebtService implements OnInit {
user:any
uid:any
collectionName = "closedebts"
  constructor( private afAuth: AngularFireAuth, private firestore: AngularFirestore) {


    this.uid = this.afAuth.auth.currentUser.uid // this one

   }

  addCloseDebts(closedebts) {
    console.log(closedebts)
    return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).add(closedebts)
  }
  getNotes() {
    return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).snapshotChanges();
  }
  deleteNote(closedebts) {
    this.firestore.collection("users").doc(this.uid).collection(this.collectionName).doc(closedebts).delete()
  }
ngOnInit(){
  
}
  
}
