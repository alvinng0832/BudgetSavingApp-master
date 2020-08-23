import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-moneyorlife',
  templateUrl: './moneyorlife.page.html',
  styleUrls: ['./moneyorlife.page.scss'],
})
export class MoneyorlifePage implements OnInit {

  constructor(public platform: Platform,private socialSharing: SocialSharing,private router: Router) { }
  slideOpts = {
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 30,
   
    };
  ngOnInit() {
  }


 

  moneyorlife(){
    this.router.navigateByUrl('/stripe4');
  }
  share(){
    this.platform.ready().then(async () => {
      await this.socialSharing.share('https://www.amazon.com/Your-Money-Life-Transforming-Relationship/dp/0143115766').then(() => {
      }).catch((err) => {
        console.log(err)
      });
    });
  }
  google(){
  }
  instagram(){
  }

}
