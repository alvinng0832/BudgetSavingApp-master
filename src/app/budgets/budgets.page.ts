
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { AddExpensesPage } from '../add-expenses/add-expenses.page';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.page.html',
  styleUrls: ['./budgets.page.scss'],
})
export class BudgetsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddExpensesPage
    });
    return await modal.present();
  }
}
