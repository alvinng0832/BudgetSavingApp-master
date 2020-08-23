import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-financialdiet',
  templateUrl: './financialdiet.page.html',
  styleUrls: ['./financialdiet.page.scss'],
})
export class FinancialdietPage implements OnInit {

  slideOpts = {
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 30,
   
    };

  constructor(public platform: Platform,private socialSharing: SocialSharing,private router:Router) { }

  ngOnInit() {
  }

  financialdiet(){
    this.router.navigateByUrl('/stripe');
  }
  share() {
    this.platform.ready().then(async () => {
      await this.socialSharing.share('https://us.macmillan.com/books/9781250176172').then(() => {
      }).catch((err) => {
        console.log(err)
      });
    });
  }

}
