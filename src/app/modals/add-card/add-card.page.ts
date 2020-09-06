import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import {NgxMaskIonicModule} from 'ngx-mask-ionic'



@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  param:any;
 


  cardName = ''
  cardNumber = '';
  cardExpiry ='';

  disable = false
  uid: any
  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private afAuth: AngularFireAuth, 
    private firestore: AngularFirestore,
    private nav: NavController,
    public toastController: ToastController
  ) {
    this.param = this.navParams.get('data');
    console.log(this.param)

    this.uid = this.afAuth.auth.currentUser.uid
  }
  ngOnInit() {
   
  }

  name(){
    if (this.cardExpiry.length == 7 && this.cardName != "" &&
      this.cardNumber.length == 19) {
        console.log('true')
        this.disable = true
      } else {
        this.disable = false
      }

  }


  close() {
    this.modalController.dismiss()
  }
  save() {
    let success = 'Card added successfully!'
    let error = "Something went wrong, please try again later"
    let unmaskedData = {
      id: this.param.id,
      cardImg: this.param.cardLogo,
      cardName: this.cardName,
      cardNumber: this.cardNumber.replace(/\D+/g, ' '),
      cardExpiry: this.cardExpiry
    };

    
    console.log(unmaskedData);
    this.firestore.collection("users").doc(this.uid).collection("Card").add(unmaskedData)
      .then(s => {
        this.close();
        this.presentToast(success);
      }).catch(err => {
        console.log(err)
        this.presentToast(error)
      })
  }



  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
