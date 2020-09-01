import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCardPage } from '../add-card/add-card.page';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.page.html',
  styleUrls: ['./select-card.page.scss'],
})
export class SelectCardPage implements OnInit {


  banks = [
    {
      id: "dbs",
      name: "DBS",
      img: "https://www.pngfind.com/pngs/m/328-3284878_dbs-bank-logo-transparent-hd-png-download.png"
    },
    {
      id: "ocbc",
      name: "OCBC",
      img: "https://e7.pngegg.com/pngimages/434/245/png-clipart-ocbc-bank-singapore-mobile-banking-online-banking-bank-logo-insurance.png"
    },
    {
      id: "uob",
      name: "UOB",
      img: "https://rec-data.kalibrr.com/www.kalibrr.com/logos/JFDBUP328CKMGLP3GU86NEHGYU688YJZH4BBVJ4W-5e1c47ba.jpg"
    }
  ]


  constructor(
    public modalController: ModalController
  ) { }


  

  ngOnInit() {
  }


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
