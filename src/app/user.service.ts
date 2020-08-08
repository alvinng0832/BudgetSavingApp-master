import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';

interface user {
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uid: any;
  user: any;
 

  constructor( private afAuth: AngularFireAuth, public auth: AngularFireAuth) {
    this.user =JSON.parse(localStorage.getItem('user'))
    this.afAuth.auth.onAuthStateChanged((user) => {
     
      this.uid = user.uid
    })
    console.log(this.user.user.uid)
  }

  setUser(user: user) {
    this.user = user
  }

  getUsername(): string {
    return this.user.username
  }

  reAuth(username: string, password: string) {
  return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@codedamn.com', password))
  }

  updatePassword(newpassword: string) {
    return this.afAuth.auth.currentUser.updatePassword(newpassword);
  }

  updateEmail(newemail: string) {
    return this.afAuth.auth.currentUser.updateEmail(newemail + '@codedamn.com')
  }

  async isAuthenticated() {
    if(this.user) return true

    const user = await this.afAuth.authState.pipe(first()).toPromise();

    if(user) {
      this.setUser({
        username: user.email.split('@')[0],
        uid: user.uid
      });

      return true
    }
    return false
  }

  getUID(): string {
    return this.user.uid
  }

  

}
