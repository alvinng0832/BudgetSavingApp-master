import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-fearless',
  templateUrl: './fearless.page.html',
  styleUrls: ['./fearless.page.scss'],
})
export class FearlessPage implements OnInit {

  slideOpts = {
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 30,
   
    };

  constructor( private socialSharing: SocialSharing,public platform: Platform,
    private router: Router) { }

  ngOnInit() {
  }

  
  financialdiet(){
    this.router.navigateByUrl('/stripe6');
  }
  share(){
    this.platform.ready().then(async () => {
      await this.socialSharing.share('https://www.goodreads.com/book/show/17737028-financially-fearless').then(() => {
      }).catch((err) => {
        console.log(err)
      });
    });
  }

}
