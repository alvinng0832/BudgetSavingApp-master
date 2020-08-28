import { Router, NavigationExtras } from '@angular/router';
import { LearnInfo } from './../../models/learn';
import { Component, OnInit } from '@angular/core';
import { LearnService } from './../services/learn.service';
import { DomSanitizer } from '@angular/platform-browser';
import { validateEventsArray } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  segmentModel: "all";
  learn: LearnInfo[];
  user: any;
  //Call the array of items from the learn database
  UID: string;
  dataLearn = [] // all data
  filtered = [] // for filtering
  saved = []
  constructor(
    private dom: DomSanitizer,
    private learnService: LearnService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController
  ) {

    this.user = this.afAuth.auth.currentUser;
    this.UID = this.user.uid;
  }


  ngOnInit() {
    let array = []
    this.segmentModel = "all" // first start as All
    this.learnService.getSaved(this.UID).subscribe(d => {
      let ss: any = d
      this.saved = ss.saved
      this.learnService.getLearn().subscribe(data => {
        this.dataLearn = data.map(e => {
          const id = e.payload.doc.id;
          const title = e.payload.doc.data()['title']
          const video = this.dom.bypassSecurityTrustResourceUrl(e.payload.doc.data()['video'])
          const category = e.payload.doc.data()['category']
          const description = e.payload.doc.data()['description']
          const saved = (ss.saved.includes(id))
          const image = e.payload.doc.data()['image']
        
          return { id, title, video, category, description, saved, image }
        })
        console.log(this.saved)
        this.filtered = this.dataLearn
        this.all()
      })

    })

  }



  all() {
    this.filtered = []  // clear filter
    this.filtered = this.dataLearn  // filtered == all data

  }
  save(val) {
    this.dataLearn.map(e => {
      if (e.id == val.id) {
        e.saved = true
      }
    })
    this.saved.push(val.id)
    this.learnService.saveLearn(this.UID ,this.saved)
  }

  unsave(val) {
    this.dataLearn.map(e => {
      if (e.id == val.id) {
        e.saved = false
      }
    })
    this.saved = this.saved.filter((item) => item !== val.id)
    this.learnService.saveLearn(this.UID, this.saved)
  }

  details(val) {
    let navigationExtras: NavigationExtras = { state: { obj: val } }
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

