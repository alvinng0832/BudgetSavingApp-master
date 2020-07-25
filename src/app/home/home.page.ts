import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  email;
  constructor( private afAuth: AngularFireAuth, private onauth: ExpenseService) {
    this.data = JSON.parse(localStorage.getItem('user'))
    console.log(this.data.user)
  }

  ngOnInit() {
  }
  ionViewDidEnter() {

    this.email = this.onauth.email
   }
 

}
