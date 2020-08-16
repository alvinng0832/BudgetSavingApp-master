import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-moneyorlife',
  templateUrl: './moneyorlife.page.html',
  styleUrls: ['./moneyorlife.page.scss'],
})
export class MoneyorlifePage implements OnInit {

  constructor(private socialSharing: SocialSharing,private router: Router) { }
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
    var options = {
      message:'Ionic Share',
      url:'http://ionicframework.com/docs/native/social-sharing',
    };
    this.socialSharing.shareWithOptions(options);
  }
  google(){
  }
  instagram(){
  }

}
