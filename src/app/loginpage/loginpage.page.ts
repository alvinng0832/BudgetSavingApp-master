import { AuthService } from './../auth.service';
import { FirebaseService } from './../services/firebase.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import * as firebase from 'firebase';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  verificationId: any;
  recaptchaVerifier: any;
  otp: string
  validation_form: FormGroup;
  errorMessage: string = ' ';
  confirmationResult: firebase.auth.ConfirmationResult
  user: any;
  uid: string;
  constructor(
    private navCtl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    public loadingController: LoadingController,
    private router: Router,
    private fb: Facebook,
    private fireAuth: AngularFireAuth

  ) { 
    this.user =JSON.parse(localStorage.getItem('user'))
    this.afAuth.auth.onAuthStateChanged((user) => {
     
      this.uid = user.uid
    })
    console.log(this.user.user.uid)
  }

  ngOnInit() {
    //Validations
    this.validation_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        // Validators.minLength(8),
        Validators.required
      ])),
    });

    this.recaptchaVerifier = new firebase.auth.
      RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' })
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' }
    ]
  };

  loginUser(value) {
    this.presentLoading()
    this.authService.loginUser(value)
      .then(res => {
        let obj: any;
        obj = res
        console.log(obj.user);

        if (res) {

          localStorage.setItem('user', JSON.stringify(obj.user))
          this.navCtl.navigateForward("/home")
          this.loadingController.dismiss()
        } 
        this.loadingController.dismiss()
        // this.errorMessage = "";
      }, err => {
        this.loadingController.dismiss()
        this.errorMessage = err.message;
      })
  }

 
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    console.log('Loading dismissed!');
  }

  fblogin() {

    this.fb.login(['email'])
      .then((response: FacebookLoginResponse) => {
        this.onLoginSuccess(response);
        console.log(response.authResponse.accessToken);
      }).catch((error) => {
        console.log(error)
        alert('error:' + error)
      });
  }
  onLoginSuccess(res: FacebookLoginResponse) {
    // const { token, secret } = res;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigateByUrl('/home')
        this.loading.dismiss();
      })

  }
  onLoginError(err) {
    console.log(err);
  }
}

