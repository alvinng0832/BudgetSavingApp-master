// firebase.service.ts
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
export interface Goals {
  id?: string,
  Name: string,
  SavedAmount: string,
  TargetAmount: string,
  DesiredDate: string,
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnInit{


 collectionName = "addGoals"
 usercollection = "users"
  uid: any
  user:any
  constructor(
    private firestore: AngularFirestore, private afAuth: AngularFireAuth, private userService: UserService
  ) { 
    this.user = JSON.parse(localStorage.getItem('user'));


    console.log(this.user.user.uid)
    // this.afAuth.auth.onAuthStateChanged((user) => {
    //   console.log(user)
    //   this.uid = user.uid
    // })
    
  }
ngOnInit(){
  
}
  create_student(record) {
    return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).add(record);
  }

  read_students() {
    return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).snapshotChanges();
  }

 update_student(recordID, record) {
 this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(recordID).update(record);
}

  delete_student(record_id) {
    this.firestore.collection("users").doc(this.uid).collection(this.collectionName).doc(record_id).delete()
  }
}
