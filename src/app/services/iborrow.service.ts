import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

 interface BorrowDebts {
 
  Name: string;
  Description: string;
  Amount: string;
  Date: string;
  DueDate: string;
 
}
@Injectable({
  providedIn: 'root'
})
export class IborrowService implements OnInit{

  private BorrowCollection: AngularFirestoreCollection<BorrowDebts>;
  user:any
 
  uid:any
  collectionName = 'iborrow'
 
    constructor(private firestore: AngularFirestore,
      private afAuth: AngularFireAuth,
      private authService: AuthService
    ) {

      this.user =JSON.parse(localStorage.getItem('user'))
      this.uid = this.afAuth.auth.currentUser
      
    }
      
     
   
    ngOnInit(){
     
    
    }

      
      getNotes() {
        return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).snapshotChanges();
      }
      updateNote(iborrowID, iborrow) {
         this.firestore.collection("users" ).doc(this.user.user.uid).collection(this.collectionName).doc(iborrowID).update(iborrow)
      }
      deleteNote(iborrowid) {
        this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(iborrowid).delete();
      }
      addNote(iborrow : BorrowDebts) {
        console.log(iborrow)
        return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).add(iborrow)
      }
     
}
