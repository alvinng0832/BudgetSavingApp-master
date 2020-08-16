import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';


export interface LentDebts {
  Name: string,
  Amount: string,
  Description: string,
  DueDate:string,
  Date: string,
  userId: string
}

@Injectable({
  providedIn: 'root'
})
export class IlentService implements OnInit{
  private LentCollection: AngularFirestoreCollection<LentDebts>;
  private ilented: Observable<LentDebts[]>;
  uid:any
  user:any
  collectionName= "ilented"
  collectionName1="closedebts"

    constructor(private firestore: AngularFirestore,
      private afAuth: AngularFireAuth,
      private authService: AuthService
    ) {
      this.user =JSON.parse(localStorage.getItem('user'))
      this.afAuth.auth.onAuthStateChanged((user) => {
       
        this.uid = user.uid
      })
    }
      
    ngOnInit(){
      this.LentCollection =  this.firestore.collection('users').doc(this.user).collection<LentDebts>('ilented');
      this.ilented = this.LentCollection.snapshotChanges().pipe(
      map(data => data.map(e => {
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
        return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).snapshotChanges();
      }
      updateNote(ilentID, ilent) {
       this.firestore.collection('users').doc(this.user.user.uid).collection(this.collectionName).doc(ilentID).update(ilent);    
        }
      deleteNote(ilent_id) {
        this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(ilent_id).delete();
      }
      addNote(ilent: LentDebts) {
        return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).add(ilent);
      }
      addCloseDebts(closedebts) {
        console.log(closedebts)
        return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName1).add(closedebts);
      }
      getCloseDebts() {
        return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName1).snapshotChanges();
      }
      deleteCloseDebts(closedebts) {
        this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName1).doc(closedebts).delete();
      }

     
    
}
