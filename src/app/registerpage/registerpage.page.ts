import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.page.html',
  styleUrls: ['./registerpage.page.scss'],
})
export class RegisterpagePage implements OnInit {
  emailaddress: string = ""
  username: string = ""
  password: string = ""
  confirmpassword: string = ""

 constructor(
    public afAuth: AngularFireAuth,
    public auth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router
    ) { }

    ngOnInit() {
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();
  }

  async Signup(){
    const {emailaddress, username, password, confirmpassword } = this
    if (password !== confirmpassword) {
      return console.error("Passwords don't match")
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@aketianxiu.com.sg', password);

      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      });

      this.user.setUser({
        username,
        uid: res.user.uid
      });

      this.presentAlert('Success', 'You are registered!');
      this.router.navigate(['/loginpage']);

    } catch(error) {
      console.dir(error);
    }
  }
  instagram(){
  }
  facebook(){
  }
  gotologinPage(){
    this.router.navigateByUrl('/loginpage')
  }


}
