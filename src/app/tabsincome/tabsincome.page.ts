import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IncomeService } from '../services/income.service';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';


@Component({
  selector: 'app-tabsincome',
  templateUrl: './tabsincome.page.html',
  styleUrls: ['./tabsincome.page.scss'],
})
export class TabsincomePage implements OnInit {

  data: any
  totalIncome = 0
  incomeList = []
  calID: any;
  constructor(
    private modalController: ModalController,
    private incomeService: IncomeService,
    private tabs: TabsbudgetPage,
    private navParams: NavParams

  ) {
    // public value = this.navParams.get('value');
    this.data = this.navParams.get('data');
    console.log(this.data)
    // console.log(tabs.data)
    // this.incomedata = {} as incomeRecord
    this.incomeService.getIncome(this.data.id).subscribe(data => {

        this.incomeList = data.map(e => {
        
          const data = e.payload.doc.data();
          // this.totalIncome =+ e.payload.doc.data()["amount"];
          const id = e.payload.doc.id;
          return { id, ...data }
        })

        this.incomeList.map(e => this.totalIncome += e.amount)
        console.log(this.totalIncome)
        console.log(this.incomeList)

      })

  }

  ngOnInit() {  
    
  }

  async closeModal() {
    await this.modalController.dismiss();
  }


}


