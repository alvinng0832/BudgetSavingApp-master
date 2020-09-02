import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {Chart} from 'chart.js';
import { IncomeService } from '../services/income.service';
import { TabexpenseService } from '../services/tabexpense.service';


@Component({
  selector: 'app-calculatedbudget',
  templateUrl: './calculatedbudget.page.html',
  styleUrls: ['./calculatedbudget.page.scss'],
})
export class CalculatedbudgetPage implements OnInit {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  greens: number;
  reds: number;
  doughnutChart: any;
 
  data: any
  totalIncome = 0
  totalExpense = 0
  incomeList = []
  expenseList = []

  constructor(public navCtrl: NavController,
    //private incomeService: IncomeService,
    //private expenseService: TabexpenseService,
    //private navParams: NavParams
    ) 
    
    {
    this.greens = 0;
    this.reds = 0;
  
    // public value = this.navParams.get('value');
    //this.data = this.navParams.get('data');
    console.log(this.data)
    // console.log(tabs.data)
    // this.incomedata = {} as incomeRecord\

    //income
    // this.incomeService.getIncome(this.data.id).subscribe(data => {

    //     this.incomeList = data.map(e => {
        
    //       const data = e.payload.doc.data();
    //       // this.totalIncome =+ e.payload.doc.data()["amount"];
    //       const id = e.payload.doc.id;
    //       return { id, ...data }
    //     })

    //     this.incomeList.map(e => this.totalIncome += e.amount)
    //     console.log(this.totalIncome)
    //     console.log(this.incomeList)

    //   })


      //expense
    // this.expenseService.getExpense(this.data.id).subscribe(data => {

    //     this.expenseList = data.map(e => {
        
    //       const data = e.payload.doc.data();
    //       const id = e.payload.doc.id;
    //       return { id, ...data }
    //     })

    //     this.expenseList.map(e => this.totalExpense += e.amount)
    //     console.log(this.totalExpense)
    //     console.log(this.expenseList)

    //   })
  }

  ngOnInit() {
  }

  
  addGreens(): void {
    this.greens++;
    this.displayChart();
  }
 
  addReds(): void {
    this.reds++;
    this.displayChart();
  }
 
  displayChart() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.greens, this.reds],
          backgroundColor: [
            'rgba(0, 255, 0, 1)',
            'rgba(255, 0, 0, 1)'
          ]
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        title: {
          display: false,
          fontStyle: 'bold',
          fontSize: 18
        }
      },
 
    });
  }


}
