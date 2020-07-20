import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  save(uid: string) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  registerUser(value) {
    return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(newUser => {
        firebase
          .database()
          .ref('/users/')
          .child(newUser.user.uid)
          .set({
            username: value.username,
            email: value.email
          })
      }).catch(er => {
        console.log(er)
      })
  }
  
  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
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
}
