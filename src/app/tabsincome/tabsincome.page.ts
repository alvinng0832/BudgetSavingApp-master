import { Component, OnInit, Type } from '@angular/core';
import { AddIncomePage } from '../add-income/add-income.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IncomeService } from '../services/income.service';
//import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';


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
  
  incomeList = [];
  incomedata: incomeRecord;
  
  constructor(
    private modalController: ModalController,
    private incomeService: IncomeService,
    //private tabs: TabsbudgetPage,
  ) 
  { 
    this.incomedata = {} as incomeRecord
  }

  ngOnInit() {

    // this.incomeService.getIncome().subscribe(data => {
    //   console.log(data)
    //     this.incomeList = data.map(e => {
    //       const data = e.payload.doc.data();
    //       const id = e.payload.doc.id;
    //       return { id, ...data }
    //     })
       
       
    //   })
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: AddIncomePage
      });
      return await modal.present();
    }

 

}
  

