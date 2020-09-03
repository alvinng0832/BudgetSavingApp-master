import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TabexpenseService } from '../services/tabexpense.service';

@Component({
  selector: 'app-tabsexpense',
  templateUrl: './tabsexpense.page.html',
  styleUrls: ['./tabsexpense.page.scss'],
})
export class TabsexpensePage implements OnInit {
  data: any;
  expenseList = []
  totalExpense = 0

  constructor(
    private modalController: ModalController,
    private expenseService: TabexpenseService,
    private navParams: NavParams
  ) 
  { 
    this.data = this.navParams.get('data');
    console.log(this.data)

    this.expenseService.getExpense(this.data.id).subscribe(data =>{

      this.expenseList = data.map(e => {

        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        return { id, ...data }
      })

      this.expenseList.map(e => this.totalExpense += e.amount)
      
      console.log(this.totalExpense)
      console.log(this.expenseList)
    })
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
