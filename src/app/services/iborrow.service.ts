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
  user:any
  private iBorrow: Observable<BorrowDebts[]>;
  uid:any
  collectionName: "iborrow"
 
    constructor(private firestore: AngularFirestore,
      private afAuth: AngularFireAuth,
      private authService: AuthService
    ) {

      this.user =JSON.parse(localStorage.getItem('user'))
      this.afAuth.auth.onAuthStateChanged((user) => {
       
        this.uid = user.uid
      })
      console.log(this.user.user.uid)
    }
      
     
   
    ngOnInit(){
      this.BorrowCollection = this.firestore.collection('users').doc(this.user).collection<BorrowDebts>(this.collectionName);
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
        return this.firestore.collection('users').doc(this.uid);
      }
      updateNote(iborrow) {
        return this.firestore.collection('users' ).doc(this.uid).collection('iBorrow')
        .add(iborrow)
      }
      deleteNote(iborrow) {
        this.BorrowCollection.doc(iborrow.id).delete();
      }
      addNote(iborrow) {
        console.log(iborrow)
        return this.firestore.collection('users' ).doc(this.uid).collection('iBorrow')
        .add(iborrow)
      }
     
}
