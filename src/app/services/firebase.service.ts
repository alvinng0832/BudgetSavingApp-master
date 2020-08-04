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
 usercollection = "users"
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
    return this.firestore.collection("users").doc(this.uid).collection(this.collectionName).add(record);
  }

  read_students() {
    return this.firestore.collection(this.usercollection).doc(this.uid).collection(this.collectionName).snapshotChanges();
  }

 update_student(recordID, record) {
    this.firestore.doc(this.usercollection + this.uid + recordID).update(record);
  }

  delete_student(record_id) {
    this.firestore.collection(this.usercollection + '/addGoals' + record_id).doc(this.uid).delete();
  }
}
