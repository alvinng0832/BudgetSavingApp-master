import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { IncomeService } from '../services/income.service';
// import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';


interface incomeRecord {
  amount: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-tabsincome',
  templateUrl: './tabsincome.page.html',
  styleUrls: ['./tabsincome.page.scss'],
})
export class TabsincomePage implements OnInit {

  //incomeList = [];
  incomedata: incomeRecord;
  data: any
  test = "tetsing"
  list: any;
  constructor(
    private modalController: ModalController,
    private incomeService: IncomeService,
    private navParams: NavParams
    //private tabs: TabsbudgetPage,

  ) {
    // public value = this.navParams.get('value');
    this.data = this.navParams.get('data');
    console.log(this.data)
    // console.log(tabs.data)
    // this.incomedata = {} as incomeRecord
    this.incomeService.getIncome(this.data.id).subscribe(data => {

        this.list = data.map(e => {
        
          const data = e.payload.doc.data();
          const id = e.payload.doc.id;
          return { id, ...data }
        })
        console.log(this.list)
        console.log('tesat')
      })

  }

  ngOnInit() {
    this.test = "testungfffffffffffffff"
  }


  async closeModal() {
    await this.modalController.dismiss();
  }



}


