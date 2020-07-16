import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  financialdiet(){
    this.router.navigateByUrl('/stripe1');
  }
  share(){

  }

}
