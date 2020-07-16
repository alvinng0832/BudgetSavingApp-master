import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ourstore',
  templateUrl: './ourstore.page.html',
  styleUrls: ['./ourstore.page.scss'],
})
export class OurstorePage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  moneyorlife(){
    this.router.navigateByUrl('/moneyorlife');
  }

}
