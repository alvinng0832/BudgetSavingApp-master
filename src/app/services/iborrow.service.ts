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

  uid:any
  collectionName = 'iborrow'
 
    constructor(private firestore: AngularFirestore,
      private afAuth: AngularFireAuth,
      private authService: AuthService
    ) {
      this.uid = this.afAuth.auth.currentUser.uid
    
    }
      
     
   
    ngOnInit(){
     
    
    }

      
      getNotes() {
        return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).snapshotChanges();
      }
      updateNote(iborrowID, iborrow) {
         this.firestore.collection("users" ).doc(this.uid).collection(this.collectionName).doc(iborrowID).update(iborrow)
      }
      deleteNote(iborrowid) {
        this.firestore.collection("users").doc(this.uid).collection(this.collectionName).doc(iborrowid).delete();
      }
      addNote(iborrow : BorrowDebts) {
        console.log(iborrow)
        return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).add(iborrow)
      }
     
}
