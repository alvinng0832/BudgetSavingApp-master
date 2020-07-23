// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 collectionName = "addGoals"
  uid: any
  constructor(
    private firestore: AngularFirestore, private afAuth: AngularFireAuth, private userService: UserService
  ) { 
    this.afAuth.auth.onAuthStateChanged((user) => {
      console.log(user)
      this.uid = user.uid
    })
    
  }

  create_student(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_students() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_student(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_student(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
