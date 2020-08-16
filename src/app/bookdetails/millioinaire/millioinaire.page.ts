import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
  constructor(private socialSharing: SocialSharing,private router: Router) { }

  ngOnInit() {
  }
  financialdiet(){
    this.router.navigateByUrl('/stripe3');
  }

  share(){
    var options = {
      message:'Ionic Share',
      url:'http://ionicframework.com/docs/native/social-sharing',
    };
    this.socialSharing.shareWithOptions(options);
  }
}
