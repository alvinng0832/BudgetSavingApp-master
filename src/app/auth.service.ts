import { Injectable } from '@angular/core'

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, NavController, LoadingController } from '@ionic/angular';

export interface Profile {
  id:string
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
username:string
  user: any;
  uid: any;

  save(uid: string) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private firestore:AngularFirestore,
    public afstore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loading: LoadingController,

  ) {  }

  registerUser(value) {
    this.presentLoading()
    return new Promise((resolve, reject) => { this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(newUser => {
        this.afstore.doc(`users/${newUser.user.uid}`).set({ value });
        this.loading.dismiss()
        localStorage.setItem('user', JSON.stringify(newUser))
        resolve(newUser)
      }).catch(er => {
        console.log(er.message)
        this.presentToast(er.message)
        reject(er)
        setTimeout(() => {
          this.loading.dismiss()
        },1000)
        
      })
    })
  }
  
  loginUser(value) {
    return new Promise((resolve, reject) => { this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(res => resolve(res))
      .catch(er => reject(er))
    })
  }


  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut()
          .then(suc => {
            localStorage.clear()
            console.log("LOG Out");
            this.presentToast("Log out successfully!")
            this.navCtrl.navigateRoot('/loginpage')  // remove all previous stacks page and set root page on loginpage
            resolve(suc);
          }).catch((err) => {
            reject(err);
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }

  getCurrentUser() {
    if(firebase.auth().currentUser) { return firebase.auth().currentUser; } 
    else {  return null; }
  }


  getProfile(){
    return this.firestore.collection("users").doc(this.user.user.uid).snapshotChanges();
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();


  }
}
