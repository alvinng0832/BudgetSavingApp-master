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

  segmentModel: "personal-finance";
  learn: LearnInfo[];

  //Call the array of items from the learn database
  
  dataLearn = [] // all data
  filtered = [] // filtered

  constructor(
    private dom : DomSanitizer,
    private learnService : LearnService,
    private router : Router,
  ) { }


  ngOnInit() {
    this.segmentModel = "personal-finance"
    this.learnService.getLearn().subscribe(data => {
      let obj: any[]
      obj = data
      obj.forEach(d => {
        d.video = this.dom.bypassSecurityTrustResourceUrl(d.video)
        this.dataLearn.push(d)
      })
      this.filtered = this.dataLearn
      console.log(this.dataLearn)
      // data.forEach(d => {
      //   console.log(d)
      //   this.dom.bypassSecurityTrustResourceUrl(d.video)
      // })
    })
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

  //
  segmentChange(event) {
    // console.log(event)
    console.log(this.segmentModel)
    this.filtered = []
    this.dataLearn.forEach(see => {
      console.log(see.title)
      if (see.category == this.segmentModel) {
        this.filtered.push(see)
      }
    })
    console.log(this.filtered)
  }

}

