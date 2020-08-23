import { AuthService } from './../auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController, NavController, ToastController, IonSlides, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

export interface Profile {
  id?: string
  username: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.page.html',
  styleUrls: ['./registerpage.page.scss'],
})
export class RegisterpagePage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides; // SLIDES CONTROLLER
  validation_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  appVeri

  phoneNumber: ''; // DUN ERASE, TO HOLD PHONE NUMBER
  otp: '' // THE OTP YOU TYPED IN


  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'pattern', message: 'Enter a valid username.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'Confirm Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' }
    ]
  };

  verificationId: any;
  recaptchaVerifier: any;
  user: any;
  uid: any;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    private afstore: AngularFirestore,
    private loading: LoadingController,

  ) { 

  }

  ngOnInit() {

    this.validation_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        // Validators.maxLength(25),
        // Validators.minLength(5),
        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        // Validators.minLength(8),
        Validators.required
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        // Validators.minLength(8),
  Validators.required
      ]))

    });


    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' })

  }


  next() {
    this.slideWithNav.lockSwipeToNext(false)
    this.slideWithNav.lockSwipeToPrev(true)
    this.slideWithNav.slideTo(1)
    this.slideWithNav.lockSwipeToNext(true)
  }

  ionViewDidEnter() {
    this.slideWithNav.lockSwipeToPrev(true)
    this.slideWithNav.lockSwipeToNext(true)
  }


  tryRegister(value) {
    if (value.password != value.confirmpassword) {
      this.presentToast("Password does not match")
    } else {

    this.authService.registerUser(value)
      .then(res => {

        this.errorMessage = "";

        // AFTER REGISTER IT STRAIGHT AWAY GO IN LOGIN STATE, IN OTHER WORDS, NO NEED GO LOGIN PAGE 
        // MANDATORY UPDATE PHONE NUMBER 
        this.authService.loginUser(value).then(suc => {

          this.afAuth.auth.onAuthStateChanged((user) => {
      
            if (user) {

              user.updateProfile({
                displayName: value.username
              })
              this.presentToast("Your account has been created successfully.")

              // UPDATE PHONE WHILE IN LOGIN STATE BEFORE ENTERING TO MAIN PAGE
              this.next() // < GO TO NEXT SLIDE WHICH IS THE PHONE NUMBER
            }
          })
        })

      }, err => {

        // RETURN ERROR DURING REGISTER 
        console.log(err);
    
        this.errorMessage = err.message;
        this.successMessage = "";
      })
    }
  }

  verify() {
    this.presentLoading() // show loading
    var container = document.getElementById("recaptcha-container")

    console.log(this.appVeri)
    if (this.appVeri) { // check if reCapcha run already
      console.log("RUN")
      this.appVeri.clear();
      container.innerHTML = `<div id="recap"></div>`
    }


    this.appVeri = new firebase.auth.RecaptchaVerifier("recap", { size: "invisible" });


    console.log(this.otp)

    this.afAuth.authState.subscribe(user => {

      var provider = new firebase.auth.PhoneAuthProvider();

      console.log(this.phoneNumber)
      provider.verifyPhoneNumber(this.phoneNumber, this.appVeri).then((verificationId) => {

        this.verificationId = verificationId  // HOLD THE VERIFICATION ID AFTER IT SENT THE OTP NUMBER

      })
        .then((result) => {
          this.loading.dismiss() // dismiss loading
          // Phone credential now linked to current user.
          // User now can sign in with new phone upon logging out.
          this.presentToast("OTP has been sent!")
          console.log(result);
        })
        .catch((error) => {
          this.loading.dismiss() // dismiss loading
          // Error occurred.
          console.log(error);
          // put error
        });
    }

    )
  }
  //Verifying OTP
  update() {
    this.presentLoading(); // show loading
    this.afAuth.authState.subscribe(user => {

      // THE CRED HOLDS BOTHE VERIFICATION ID (FROM PREVIOUS FUNCTION) AND THE OTP NUMBER YOU TYPED
      let cred = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.otp);
      // YOU CANT CONSOLE LOG CRED DUE TO SECURITY REASON AND IT WILL RETURN UNDEFINED

      user.updatePhoneNumber(cred).then(success => {
        // TADA UPDATED 
        console.log(success)
      }).then(success => {
        this.loading.dismiss() // dismiss loading
        console.log(success)
        this.navCtrl.navigateForward('/home');
        console.log("Successfully updated")


      }).catch(err => {
        this.loading.dismiss() // dismiss loading
        this.presentToast(err.message)
        // DO ERROR HANDLER, TOAST, ALERT ETC

      })
    })
  }

  goLoginPage() {
    this.navCtrl.navigateBack('/loginpage');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  SlideDidChange(ev) {
    console.log(ev)
  }

  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }


}