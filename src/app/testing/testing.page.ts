import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Chart } from 'chart.js';
import { ToastController, NavController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {
  data: Observable<any[]>;
  ref: AngularFireList<any>;
 
  months = [
    {value: 0, name: 'January'},
    {value: 1, name: 'February'},
    {value: 2, name: 'March'},
    {value: 3, name: 'April'},
  ];
 
  transaction = {
    value: '',
    expense: false,
    month: ''
  }
 
  @ViewChild('valueBarsCanvas') valueBarsCanvas;
  valueBarsChart: any;
 
  chartData = null;
 
  constructor(
    public navCtrl: NavController, 
    private db: AngularFireDatabase, 
    private toastCtrl: ToastController,
    ) {
  }
 
  ionViewDidLoad() {
    // Reference to our Firebase List
    this.ref = this.db.list('transactions', ref => ref.orderByChild('month'));
 
    // Catch any update to draw the Chart
    this.ref.valueChanges().subscribe(result => {
      if (this.chartData) {
        this.updateCharts(result)
      } else {
        this.createCharts(result)
      }
    })
  }

  addTransaction() {
    this.ref.push(this.transaction).then(async () => {
      
      this.transaction = {
        value: '',
        month: '',
        expense: false
      };
      
      let toast = await this.toastCtrl.create({
        message: 'Charts Updated',
        duration: 3000
      });
      return await toast.present();
    })
}
getReportValues() {
  let reportByMonth = {
    0: null,
    1: null,
    2: null,
    3: null
  };
 
  for (let trans of this.chartData) {
    if (reportByMonth[trans.month]) {
      if (trans.expense) {
        reportByMonth[trans.month] -= +trans.value;
      } else {
        reportByMonth[trans.month] += +trans.value;
      }
    } else {
      if (trans.expense) {
        reportByMonth[trans.month] = 0 - +trans.value;
      } else {
        reportByMonth[trans.month] = +trans.value;
      }
    }
  }
  return Object.keys(reportByMonth).map(a => reportByMonth[a]);
}

createCharts(data) {
  this.chartData = data;
 
  // Calculate Values for the Chart
  let chartData = this.getReportValues();
 
  // Create the chart
  this.valueBarsChart = new Chart(this.valueBarsCanvas.nativeElement, {
    type: 'bar',
    data: {
      labels: Object.keys(this.months).map(a => this.months[a].name),
      datasets: [{
        data: chartData,
        backgroundColor: '#32db64'
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItems, data) {
            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' $';
          }
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes: [{
          ticks: {
            callback: function (value, index, values) {
              return value + '$';
            },
            suggestedMin: 0
          }
        }]
      },
    }
  });
}
updateCharts(data) {
  this.chartData = data;
  let chartData = this.getReportValues();
 
  // Update our dataset
  this.valueBarsChart.data.datasets.forEach((dataset) => {
    dataset.data = chartData
  });
  this.valueBarsChart.update();
}

ngOnInit(){
  
}

}




 
