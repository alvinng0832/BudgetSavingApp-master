import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  masks: any;

  cardInfo: FormGroup
  cardName = ''
  cardNumber = '';
  cardExpiry ='';

  disable = false

  constructor(
    public modalController: ModalController,
  ) {
   
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

    let unmaskedData = {
      cardName: this.cardName,
      cardNumber: this.cardNumber.replace(/\D+/g, ' '),
      cardExpiry: this.cardExpiry
    };
    console.log(unmaskedData);

  }

}
