import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Chart} from 'chart.js';
import { TabsincomePage } from '../tabsincome/tabsincome.page';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';
 

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
  uid: any;
  calID: any;

  constructor(public navCtrl: NavController,
    private tabs: TabsbudgetPage) {
    this.greens = 0;
    this.reds = 0;

    this.calID = this.tabs.data.id;
    console.log(this.tabs.data)
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
