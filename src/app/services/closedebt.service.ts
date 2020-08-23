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
    this.user =JSON.parse(localStorage.getItem('user'))
    this.afAuth.auth.onAuthStateChanged((user) => {
     
      this.uid = user.uid
    })
    console.log(this.user.uid)
   }

  addCloseDebts(closedebts) {
    console.log(closedebts)
    return this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).add(closedebts)
  }
  getNotes() {
    return this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).snapshotChanges();
  }
  deleteNote(closedebts) {
    this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).doc(closedebts).delete()
  }
ngOnInit(){
  
}
  
}
