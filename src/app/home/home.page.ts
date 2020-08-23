import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('valueBarsCanvas') valueBarsCanvas;
  @ViewChild('valueDonutCanvas') valueDonutCanvas;
  valueBarsChart: any;
  chartData = null;
  chartData1 = null;
  DonutChartdata = null;
  @ViewChild('pie2Chart') pie2Chart;
  pie: any;
  colorArray: any;
  user: any;
  uid: string;
  doughnut: any;
  transactionForm : FormGroup
  data: Observable<any[]>;
  ref: AngularFireList<any>;
  from = '0';
  toMonth = '11';
  from1 = '0';
  toMonth1 = '11';
  levelsArr = ['January', 'February', 'March', 'April', 'May', 'June',
   'July', 'August', 'September', 'October', 'November', 'December'];
  monthsOfGoal = [
    {value: 0, value1: 0,name: 'January'},
    {value: 1, value1: 1,name: 'February'},
    {value: 2, value1: 2,name: 'March'},
    {value: 3, value1: 3,name: 'April'},
    {value: 4, value1: 4,name: 'May'},
    {value: 5, value1: 5,name: 'June'},
    {value: 6, value1: 6,name: 'July'},
    {value: 7, value1: 7,name: 'August'},
    {value: 8, value1: 8,name: 'September'},
    {value: 9, value1: 9,name: 'October'},
    {value: 10, value1: 10,name: 'November'},
    {value: 11, value1: 11,name: 'December'},
  ];
  

  monthsOfExpense = [
    {value: 0, name:'Food & Drinks'},
    {value: 1, name:"Clothing & Footwear"},
    {value: 2, name:"Health & PersonalCare"},
    {value: 3, name:"Charity"},
    {value: 4, name:"Education"},
    {value: 5, name:"Gifts"},
    {value: 6, name:"Home & Utilities"},
    {value: 7, name:"Leisure"},
    {value: 8, name:"Loans"},
    {value: 9, name:"Other"},
    {value: 10, name:"Sports"},
    {value: 11, name:"Taxes"},
    {value: 12, name:"Transport"}
    ];
  
    constructor(
      private afstore: AngularFirestore, 
      private afAuth: AngularFireAuth,
      public navCtrl: NavController, 
      private db: AngularFireDatabase, 
      private toastCtrl: ToastController,
      private fb: FormBuilder,
    ) {
      this.user =JSON.parse(localStorage.getItem('user'))
      this.afAuth.auth.onAuthStateChanged((user) => {
       
        this.uid = user.uid
      })
     }


  ngOnInit() {
  }

 
    ionViewDidEnter() {
      this.createPie2Chart();
      this.ref = this.db.list('GoalCharts', ref => ref.orderByChild('month'));
 
      // Catch any update to draw the Chart
      this.ref.valueChanges().subscribe(result => {
        if (this.chartData) {
          this.updateCharts(result)
        } else {
          this.createCharts(result)
        }
      })

      this.ref = this.db.list('ExpensesChart', ref => ref.orderByChild('month'));
 
      // Catch any update to draw the Chart
      this.ref.valueChanges().subscribe(result => {
        if (this.DonutChartdata) {
          this.updateDonutCharts(result)
        } else {
          this.createDonutsChart(result)
        }
      })

    }
   
    createCharts(data){
      this.chartData = data;
      this.chartData1 = data;
      // Calculate Values for the Chart
      let chartData = this.getReportValues();
      let chartData1 = this.getReportValues1();
  
      // Create the chart
      this.valueBarsChart = new Chart(this.valueBarsCanvas.nativeElement, {
        enable3D: true,
        type: 'bar',
        data: {
          labels: Object.keys(this.monthsOfGoal).map(a => this.monthsOfGoal[a].name),
          datasets: [
            {
              //targetamoount
              label: "Target Amount",
              borderColor: '#f53d3d',
              data: chartData,
              backgroundColor: '#f53d3d', 
              fill: true,    
            },
            {
              //savedamount
              label: "Save Amount",
              borderColor: '#3880ff',
              data: chartData1,
              backgroundColor: '#69bb7b',
              fill: true,
            }
          ],
        },
        options: {
         
        
          title: {
            display: true,
            fontSize: 35,
            text: 'Bar Chart'
          },
          scales: {
            xAxes: [{
            
              ticks: {
                beginAtZero: false
              },
              
            }],
            yAxes: [{
              ticks: {
                callback: function (value) {
               
                  return '$' + value ;
              
                },
                suggestedMin: 0
              }
            }]
          },
          
        }
      });
     }



     
  getReportValues() {
    let reportByMonth = {
  
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
   
    };
  
    for (let trans of this.chartData) {
      if (reportByMonth[trans.month]) {
        if (trans.expense) {
          reportByMonth[trans.month] -= +trans.value1;
        } else {
          reportByMonth[trans.month] += +trans.value1;
        }
      } else {
        if (trans.expense) {
          reportByMonth[trans.month] = 0 - +trans.value1;
        } else {
          reportByMonth[trans.month] = +trans.value1;
        }
      }
    }
    return Object.keys(reportByMonth).map(a => reportByMonth[a]);
  }

  getReportValues1() {
    let reportByMonth = {
    
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
   
      
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

  updateCharts(data) {
    this.chartData = data;
    
    let chartData = this.getReportValues();

   
    // Update our dataset
    this.valueBarsChart.data.datasets.forEach((dataset) => {
      dataset.data = chartData

    });
    this.valueBarsChart.update();
  }
    //Chart for Goals
   
    applyDateFilter(){
      this.valueBarsChart.data.labels = this.levelsArr.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
      this.valueBarsChart.update();
    }
    applyCategoryFilter(){
      this.doughnut.data.labels = this.levelsArr.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
      this.doughnut.update();
    }



  //Chart for Expenses
  createDonutsChart(data) {
    this.DonutChartdata = data

    let DonutChartdata = this.getDonutReport();
    this.doughnut =  new Chart(this.valueDonutCanvas.nativeElement,{
      startAngle: -90, endAngle: 90 ,
      type: 'doughnut',
      options: {
     
        cutoutPercentage: 65,
        responsive: true,
        
        maintainAspectRatio: true,
        title: {
          display: true,
          text: 'Doughnut Chart',
          fontSize:40
        },legend: {
					position: 'bottom',
				},animation: {
					animateScale: true,
          animateRotate: true,
           
        },
        onClick: (evt, item) => {
          
          this.doughnut.update()
          
          item[0]._model.outerRadius += 15
          
        },
       
      
      },
      data: {
				datasets: [{
					data: DonutChartdata,
          backgroundColor: ["#69bb7b","#d65b5b","#26baff","#9cd0fc","#35b468","#6a64ff","#ff0095",
          "#ffd534","#222428","blue","red","orange"],

				}],
				labels: ['Food & Drinks', 'Clothing & Footwear', 'Health & PersonalCare', 'Charity', 'Education', 'Gifts',
        'Home & Utilities', 'Leisure', 'Loans', 'Other', 'Sports', 'Taxes' , 'Transport']
      },
      
    })
  }



  updateDonutCharts(data) {
    this.DonutChartdata = data;
    
    let DonutChartdata = this.getDonutReport();

   
    // Update our dataset
    this.doughnut.data.datasets.forEach((dataset) => {
      dataset.data = DonutChartdata

    });
    this.doughnut.update();
  }

  getDonutReport() {
    let reportByMonth = {
    
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,

      
    };
   
    for (let trans of this.DonutChartdata) {
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


// Chart for Income 
createPie2Chart() {
  this.pie = new Chart(this.pie2Chart.nativeElement, {
    type: 'pie',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Viewers in millions',
        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17, 18 , 19, 20, 22],
        backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
        borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


}