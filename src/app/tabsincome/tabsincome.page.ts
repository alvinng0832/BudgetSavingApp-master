import { Component, OnInit } from '@angular/core';
import { AddIncomePage } from '../add-income/add-income.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabsincome',
  templateUrl: './tabsincome.page.html',
  styleUrls: ['./tabsincome.page.scss'],
})
export class TabsincomePage implements OnInit {
  

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddIncomePage
    });
    return await modal.present();
  }
  
}
