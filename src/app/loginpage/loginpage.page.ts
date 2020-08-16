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


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginPage implements OnInit {
  
  verificationId: any;
  recaptchaVerifier: any;
  otp: string
  validation_form: FormGroup;
  errorMessage: string = ' ';
  confirmationResult: firebase.auth.ConfirmationResult
  constructor(
    private navCtl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    public loadingController: LoadingController,
    private router: Router

  ) { }

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
}

