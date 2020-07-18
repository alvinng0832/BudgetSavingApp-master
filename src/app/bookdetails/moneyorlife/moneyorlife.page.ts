import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moneyorlife',
  templateUrl: './moneyorlife.page.html',
  styleUrls: ['./moneyorlife.page.scss'],
})
export class MoneyorlifePage implements OnInit {

  constructor(private router: Router) { }
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
  }
  google(){
  }
  instagram(){
  }

}
