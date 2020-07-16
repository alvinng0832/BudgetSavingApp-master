import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  financialdiet(){
    this.router.navigateByUrl('/stripe6');
  }
  share(){

  }

}
