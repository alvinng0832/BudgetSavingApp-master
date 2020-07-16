import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  financialdiet(){
    this.router.navigateByUrl('/stripe3');
  }

  share(){

  }
}
