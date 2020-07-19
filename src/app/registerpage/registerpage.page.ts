import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
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
  registrationform: FormGroup

 constructor(
    public afAuth: AngularFireAuth,
    public auth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router,
    private fb: FormBuilder,
    private afDB: AngularFireDatabase
    ) { 
      this.registrationform = this.fb.group({
        username: ['', [Validators.required, Validators.maxLength(50)]],
        emailaddress: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
        
    })
    }
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
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(emailaddress, password);

      this.afDB.object('users/' + res.user.uid).set({
        userId: res.user.uid,
        username,
        emailaddress,
        password
      }).then(()=> {
      this.presentAlert('Success', 'You are registered!');
      this.router.navigate(['/loginpage']);
      })
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

  passwordCheck(control) {
    if (control.value != null) {
      let conPass = control.value;
      var pass = control.root.get('password');
      if (pass) {
        var password = pass.value;
        if (password !== conPass) {
          return {
            isError: true
          }
        } else {
          return null;
        }
      }
    }
  }



}
