import { Component, OnInit } from '@angular/core';
import { LearnService } from '../services/learn.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-saved-learn',
  templateUrl: './saved-learn.page.html',
  styleUrls: ['./saved-learn.page.scss'],
})
export class SavedLearnPage implements OnInit {
  saved = []
  dataLearn = [] // all data
  user: any;
  constructor(
    private learnService: LearnService,
    private dom: DomSanitizer,
    private router: Router,
    private afAuth: AngularFireAuth,
  ) {
    this.user = this.afAuth.auth.currentUser;
   }

  ngOnInit() {
    this.learnService.getSaved(this.user.uid).subscribe(d => {
      let ss: any = d
      
      if (ss == undefined) { 
        this.saved = []
        ss = []
      } else {
        this.saved = ss.saved
      }
      this.learnService.getLearn().subscribe(data => {
        this.dataLearn = data.map(e => {
            const id = e.payload.doc.id;
            const title = e.payload.doc.data()['title']
            const video = this.dom.bypassSecurityTrustResourceUrl(e.payload.doc.data()['video'])
            const category = e.payload.doc.data()['category']
            const description = e.payload.doc.data()['description']
            const saved = ss.saved ? ss.saved.includes(id) : false;
            const image = e.payload.doc.data()['image']

            return { id, title, video, category, description, saved, image }
        })
        this.dataLearn = this.dataLearn.filter(e => e.saved == true)
        console.log(this.dataLearn)
      })

    })
  }

  details(val) {
  let navigationExtras: NavigationExtras = { state: { obj: val } }
    this.router.navigate(['learn-details'], navigationExtras);
  }

  delete(val) {
    let tr = [ ]
    console.log(val)
    this.dataLearn = this.dataLearn.filter(re =>  re.id !== val.id  )
    console.log(this.dataLearn)
    
    this.saved = this.saved.filter((item) => item !== val.id)
    console.log(this.saved)
    // this.saved = this.saved.map((obj) => { return Object.assign({}, obj)})
    this.learnService.saveLearn(this.user.uid, this.saved)
  }
}
