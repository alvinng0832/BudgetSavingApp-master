import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import {LentDebts} from'src/models/ilent';



@Injectable({
  providedIn: 'root'
})
export class IlentService {
  private LentCollection: AngularFirestoreCollection<LentDebts>;
  private ilented: Observable<LentDebts[]>;
  uid:any
  collectionName: "ilented"
 ilent:LentDebts;
    constructor(private firestore: AngularFirestore,
      private afAuth: AngularFireAuth,
      private authService: AuthService
    ) {
      let currentUser = this.authService.getCurrentUser();
      if(this.afAuth.auth.currentUser) {
        let user = this.afAuth.auth.currentUser.uid;
      }
      
      if (currentUser) {
        this.refreshNotesCollection(currentUser.uid)
      }
    }
      
    refreshNotesCollection(userId){
      this.LentCollection =  this.firestore.collection('users').doc(userId).collection<LentDebts>(this.collectionName);
      this.ilented = this.LentCollection.snapshotChanges().pipe(
      map(data => data.map(e => {
      const data = e.payload.doc.data() ;
      const id = e.payload.doc.id;
  
      return {id, ...data };
      
      }))
      )
    }

      
      getNotes() {
        return this.ilented;
      }
      updateNote(ilent) {
        return this.LentCollection.doc(ilent.id).update(ilent);
      }
      deleteNote(ilent) {
        this.LentCollection.doc(ilent.id).delete();
      }
      addNote(ilent) {
        return this.LentCollection.add(ilent);
      }
     
    
}
