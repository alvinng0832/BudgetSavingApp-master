import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


expensesForm: FormGroup
  data: any;

  email;
  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private onauth: ExpenseService) {
   
  }

  ngOnInit() {
  }
  ionViewDidEnter() {

    this.email = this.onauth.email
   }
   
 

}
