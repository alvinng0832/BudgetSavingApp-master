import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
  constructor(private socialSharing: SocialSharing,private router: Router) { }

  ngOnInit() {
  }

  financialdiet(){
    this.router.navigateByUrl('/stripe1');
  }
  share(){
    var options = {
      message:'Ionic Share',
      url:'http://ionicframework.com/docs/native/social-sharing',
    };
    this.socialSharing.shareWithOptions(options);
  }

}
