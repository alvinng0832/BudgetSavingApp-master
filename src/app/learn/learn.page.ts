import { Router, NavigationExtras } from '@angular/router';
import { LearnInfo } from './../../models/learn';
import { Component, OnInit } from '@angular/core';
import { LearnService } from './../services/learn.service';
import { DomSanitizer } from '@angular/platform-browser';
import { validateEventsArray } from '@angular/fire/firestore';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  segmentModel: "all";
  learn: LearnInfo[];

  //Call the array of items from the learn database

  dataLearn = [] // all data
  filtered = [] // for filtering

  constructor(
    private dom : DomSanitizer,
    private learnService : LearnService,
    private router : Router,
  ) { }


  ngOnInit() {
    this.segmentModel = "all" // first start as All
    this.learnService.getLearn().subscribe(data => {
      let obj: any[]
      obj = data // get all data

      obj.forEach(d => {
        d.video = this.dom.bypassSecurityTrustResourceUrl(d.video) // By pass the sercurity of the url
        this.dataLearn.push(d) 
      })
      this.filtered = this.dataLearn // both filtered and datalearn have the same data
      console.log(this.dataLearn)
      this.all() // initialize the all data
      

    })
  }

  all() {
    this.filtered = []  // clear filter
    this.filtered = this.dataLearn  // filtered == all data

  }

  details(val) {
    // console.log(val)
    let navigationExtras: NavigationExtras = {
      state: {
        obj: val
      }
    }
    this.router.navigate(['learn-details'], navigationExtras);
  }

  //Filter by category
  segmentChange(event) {

    if (this.segmentModel == 'all') {  // if segment == all run the all data 
      this.all();
    } else {
 
    this.filtered = [] // clear the filter data and push new obj that equals to category
    console.log(this.dataLearn)
    this.dataLearn.forEach(see => { // run for loop of alldata
      console.log(see)
      if (see.category == this.segmentModel) {
        this.filtered.push(see) //if meet conditions , push in the filtered array
        console.log(this.filtered)
      }
    })
    }
  }
}

