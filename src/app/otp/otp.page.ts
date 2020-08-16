import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  recaptchaVerifier;
  confirmationResult: firebase.auth.ConfirmationResult;
  otpSent = false;
  phoneNumber;
  constructor(private af: AngularFireAuth) { }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.
    RecaptchaVerifier("recaptcha-container",{'size': 'invisible'});
  }

  sendOTP(){

    var pNumber = (<HTMLInputElement>document.getElementById("phoneNumber")).value;

    this.af.auth.signInWithPhoneNumber(pNumber, this.recaptchaVerifier).then((result)=>{

      this.otpSent = true;

      this.phoneNumber = pNumber;

      this.confirmationResult = result;
      alert("OTP Sent!");
    }).catch(err =>{
      alert(err);
    })
  }

  verifyOTP(){
    var otp = (<HTMLInputElement>document.getElementById("otp")).value;
    this.confirmationResult.confirm(otp).then(()=>{
      alert("OTP Verified!");
    }).catch(err =>{
      alert(err);
    })
  }

}
