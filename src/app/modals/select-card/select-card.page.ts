import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCardPage } from '../add-card/add-card.page';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.page.html',
  styleUrls: ['./select-card.page.scss'],
})
export class SelectCardPage {

  
  // Currently the picture is both same for display and cardLogo
  // Continue to add more pics or banks/cards
  banks = [
    {
      
      id: "dbs",
      name: "DBS",
      display: "https://i.dlpng.com/static/png/421317_preview.png",
      cardLogo: "https://i.dlpng.com/static/png/421317_preview.png",
    },
    {
      id: "ocbc",
      name: "OCBC",
      display: "https://e7.pngegg.com/pngimages/434/245/png-clipart-ocbc-bank-singapore-mobile-banking-online-banking-bank-logo-insurance.png",
      cardLogo: "https://e7.pngegg.com/pngimages/434/245/png-clipart-ocbc-bank-singapore-mobile-banking-online-banking-bank-logo-insurance.png"
    },
    {
      id: "uob",
      name: "UOB",
      display: "https://rec-data.kalibrr.com/www.kalibrr.com/logos/JFDBUP328CKMGLP3GU86NEHGYU688YJZH4BBVJ4W-5e1c47ba.jpg",
      cardLogo: "https://rec-data.kalibrr.com/www.kalibrr.com/logos/JFDBUP328CKMGLP3GU86NEHGYU688YJZH4BBVJ4W-5e1c47ba.jpg"
    }
  ]


  constructor(
    public modalController: ModalController,
    
  ) { }

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: AddCardPage,
      cssClass: 'my-custom-class',
      componentProps: {
        data: data
      }
    });
    return await modal.present();
  }

}
