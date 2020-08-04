import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()
export class AuthService {
username:string
  save(uid: string) {
    throw new Error("Method not implemented.");
  }

  constructor(
    public afstore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }

  registerUser(value) {
    
    return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(newUser => {
        this.afstore.doc(`users/${newUser.user.uid}`).set({
          value
        });
        
          localStorage.setItem('user', JSON.stringify(newUser))
      }).catch(er => {
        console.log(er)
      })
  }
  
  loginUser(value) {
    return this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(sc => {
        console.log(sc)
      })
      .catch(er => {
        console.log(er)
      })
    
  
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }

  getCurrentUser() {
    if(firebase.auth().currentUser) {
      return firebase.auth().currentUser;
    } else {
      return null;
    }
  }
}
