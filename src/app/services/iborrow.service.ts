import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

export interface BorrowDebts {
  id:string
  Name: string;
  Description: string;
  Amount: string;
  Date: string;
  DueDate: string;
  userId: string;
}
@Injectable({
  providedIn: 'root'
})
export class IborrowService implements OnInit{

  private BorrowCollection: AngularFirestoreCollection<BorrowDebts>;
  private iBorrow: Observable<BorrowDebts[]>;
  uid:any
  collectionName: "iborrow"
 
    constructor(private firestore: AngularFirestore,
      private afAuth: AngularFireAuth,
      private authService: AuthService
    ) {
      this.afAuth.auth.onAuthStateChanged((user) => {
        console.log(user)
        this.uid = user.uid
      })
    }
      
     
   
    ngOnInit(){
      this.BorrowCollection = this.firestore.collection('users').doc(this.uid).collection<BorrowDebts>(this.collectionName);
      this.iBorrow = this.BorrowCollection.snapshotChanges().pipe(
      map(actions => actions.map(e => {
      const data = e.payload.doc.data() ;
      const id = e.payload.doc.id;
      const Name = e.payload.doc.data()['Name'];
      const Description = e.payload.doc.data()['Description'];
      const Amount = e.payload.doc.data()['Amount'];
      const Date = e.payload.doc.data()['Date'];
      const DueDate = e.payload.doc.data()['DueDate'];

      
      return {id, Name, Description, Amount, Date, DueDate, ...data };
      
      }))
      )
    }

      
      getNotes() {
        return this.iBorrow;
      }
      updateNote(iborrow) {
        return this.BorrowCollection.doc(iborrow.id).update(iborrow);
      }
      deleteNote(iborrow) {
        this.BorrowCollection.doc(iborrow.id).delete();
      }
      addNote(iborrow) {
        return this.BorrowCollection.add(iborrow)
      }
     
}
