import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  financialdiet(){
    this.router.navigateByUrl('/stripe2');
  }
  share(){

  }

}
