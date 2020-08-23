import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-financiallife',
  templateUrl: './financiallife.page.html',
  styleUrls: ['./financiallife.page.scss'],
})
export class FinanciallifePage implements OnInit {
  slideOpts = {
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 30,
   
    };
  constructor(public platform: Platform,private socialSharing: SocialSharing,private router: Router) { }

  ngOnInit() {
  }

  financialdiet(){
    this.router.navigateByUrl('/stripe1');
  }
  share(){
    this.platform.ready().then(async () => {
      await this.socialSharing.share('https://bethkobliner.com/books/get-financial-life/').then(() => {
      }).catch((err) => {
        console.log(err)
      });
    });
  }

}
