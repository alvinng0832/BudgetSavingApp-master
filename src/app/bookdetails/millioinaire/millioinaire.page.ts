import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-millioinaire',
  templateUrl: './millioinaire.page.html',
  styleUrls: ['./millioinaire.page.scss'],
})
export class MillioinairePage implements OnInit {
  slideOpts = {
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 30,
   
    };
  constructor(public platform: Platform,private socialSharing: SocialSharing,private router: Router) { }

  ngOnInit() {
  }
  financialdiet(){
    this.router.navigateByUrl('/stripe3');
  }

  share(){
    this.platform.ready().then(async () => {
      await this.socialSharing.share('https://www.themillionairenextdoor.com/').then(() => {
      }).catch((err) => {
        console.log(err)
      });
    });
  }
}
