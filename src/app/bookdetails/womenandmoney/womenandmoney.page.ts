import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womenandmoney',
  templateUrl: './womenandmoney.page.html',
  styleUrls: ['./womenandmoney.page.scss'],
})
export class WomenandmoneyPage implements OnInit {
  slideOpts = {
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 30,
   
    };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  financialdiet(){
    this.router.navigateByUrl('/stripe5');
  }

  share(){

  }
}
