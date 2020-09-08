import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, AlertController,  } from '@ionic/angular';
import {Chart} from 'chart.js';
import { IncomeService } from '../services/income.service';
import { TabexpenseService } from '../services/tabexpense.service';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';
import { ActivatedRoute, Router } from '@angular/router';


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
  calID: any;

  calculatedBudget = 0
  showSpinner = false;
  showDetails: boolean = false;
  showcbudget: boolean = false;
  greenSpinner: boolean = false;
  redSpinner: boolean = false;

  constructor(public navCtrl: NavController,
    private incomeService: IncomeService,
    private expenseService: TabexpenseService,
    //private navParams: NavParams
    private tabs: TabsbudgetPage,
    private route: ActivatedRoute, private router: Router,
    public toastController: ToastController,
    public alertController: AlertController
    ) 
    
    {

      this.calID = this.tabs.data.id;
      console.log(this.tabs.data)
      

    this.greens = 0;
    this.reds = 0;
  
    // public value = this.navParams.get('value');
    //this.data = this.navParams.get('data');
    // console.log(tabs.data)
    // this.incomedata = {} as incomeRecord\

    //income
    this.incomeService.getIncome(this.calID).subscribe(data => {

        this.incomeList = data.map(e => {
          const data = e.payload.doc.data();
          const id = e.payload.doc.id;
          return { id, ...data }
        })

        this.incomeList.map(e => this.totalIncome += e.amount)
        console.log(this.totalIncome)
        console.log(this.incomeList)

      })

      //expense
    this.expenseService.getExpense(this.calID).subscribe(data => {

        this.expenseList = data.map(e => {
          const data = e.payload.doc.data();
          const id = e.payload.doc.id;
          return { id, ...data }
        })

        this.expenseList.map(e => this.totalExpense += e.amount)
        console.log(this.totalExpense)
        console.log(this.expenseList)


        this.calculatedBudget = this.totalIncome - this.totalExpense
      })

      
  }

  ngOnInit() {
  }

  
  // addGreens(): void {
  //   this.greens++;
  //   this.displayChart();
  // }
 
  // addReds(): void {
  //   this.reds++;
  //   this.displayChart();
  // }
 
  // displayChart() {
  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  //     type: 'doughnut',
  //     data: {
  //       datasets: [{
  //         data: [this.greens, this.reds],
  //         backgroundColor: [
  //           'rgba(0, 255, 0, 1)',
  //           'rgba(255, 0, 0, 1)'
  //         ]
  //       }]
  //     },
  //     options: {
  //       legend: {
  //         display: false
  //       },
  //       tooltips: {
  //         enabled: false
  //       },
  //       title: {
  //         display: false,
  //         fontStyle: 'bold',
  //         fontSize: 18
  //       }
  //     },
 
  //   });
  // }


  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      //this.presentToast();
    }, 3000);

    this.showcbudget = false;
    setTimeout(() => {
      this.showcbudget = true
    }, 3500);

    if (this.calculatedBudget > 0){
    this.greenSpinner = false;
    setTimeout(() => {
      this.greenSpinner = true;
      this.presentAlertSaved();
    }, 3500);
  } else {
    this.redSpinner = false;
    setTimeout(() => {
      this.redSpinner = true;
      this.presentAlertLoss();
    }, 3500);
  }


}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Budget Sucessfully Calculated!',
    duration: 1500
  });
  toast.present();
}

async presentAlertSaved() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Budget Sucessfully Calculated!',
    subHeader: 'Budget result: Surplus',
    message: 'You saved $' + this.calculatedBudget,
    buttons: ['OK']
  });

  await alert.present();
}

async presentAlertLoss() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Budget Sucessfully Calculated!',
    subHeader: 'Budget result: Overspent',
    message: 'You have overspent by $' + (this.calculatedBudget * -1),
    buttons: ['OK']
  });

  await alert.present();
}


}
