import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Chart } from "chart.js";


interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('pieChart') pieChart;
    @ViewChild('pie1Chart') pie1Chart;
    @ViewChild('pie2Chart') pie2Chart;
  
    pie: any;
    colorArray: any;
    constructor() { }


  ngOnInit() {
    
  }
  
    ionViewDidEnter() {
      this.createPieChart();
      this.createPie1Chart();
      this.createPie2Chart();
    }
  
    //Chart for Goals
    createPieChart() {
      this.pie = new Chart(this.pieChart.nativeElement, {
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

  //Chart for Expenses
  createPie1Chart() {
    this.pie = new Chart(this.pie1Chart.nativeElement, {
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