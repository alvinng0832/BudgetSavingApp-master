import {Component, ViewChild, OnInit} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { TransactionService } from '../services/transaction.service';

 interface Expense {
  id?: string,
  // FirstName: string,
  // LastName: string,
  Amount: string,
  Description: string,
  Category: string,
  // Tags: string,
  Date: string
  userId: string
}
interface Animal {
  name: string;

}


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
})
export class AddTransactionPage implements OnInit{
  data: Observable<any[]>;
  ref: AngularFireList<any>;
  step = 0;

  // expensesForm: FormGroup;

  //muz code
  transactionForm: FormGroup;
  amount: FormControl;
  description: FormControl;
  type: FormControl;




  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  // toppings = new FormControl();
  expenses = {
    value: '',
    expense: false,
    month: ''
  }
//   toppingList: string[] = ['coffee & tea', 'medical services', 'accomodation','cloths', 'gambling', 'shoes',
// 'accessories', 'adult fun', 'airplane', 'alcohol', 'apps', 'bicycle', 'birthday','books','building upkeep','bus','car','cosmetics', 'devices','drugs',
// 'electricity','quity purchase','events','ferry','fuel','furniture','games','groceries','hairdresser','heating','home improvement','income tax',
// 'insurance', 'internet','landline phone','lending'];
  startDate = new Date(1990, 0, 1);
  animals: Animal[] = [
    {name:"Food & Drinks"},
    {name:"Clothing & Footwear"},
    {name:"Health & PersonalCare"},
    {name:"Charity"},
    {name:"Education"},
    {name:"Gifts"},
    {name:"Home & Utilities"},
    {name:"Leisure"},
    {name:"Loans"},
    {name:"Other"},
    {name:"Sports"},
    {name:"Taxes"},
    {name:"Transport"}
  ];
  expense: Expense = {
    id: null,
    // FirstName: '',
    // LastName: '',
    Amount: '',
    Description: '',
    Category: '',
    // Tags:'',
    Date: '',
    userId: null
  };
  
 
  monthsOfExpense = [
  {value: 0, name:'Food & Drinks'},
  {value: 1, name:"Clothing & Footwear"},
  {value: 2, name:"Health & PersonalCare"},
  {value: 3, name:"Charity"},
  {value: 4, name:"Education"},
  {value: 5, name:"Gifts"},
  {value: 6, name:"Home & Utilities"},
  {value: 7, name:"Leisure"},
  {value: 8, name:"Loans"},
  {value: 9, name:"Other"},
  {value: 10, name:"Sports"},
  {value: 11, name:"Taxes"},
  {value: 12, name:"Transport"}
  ];
  uid:any
  hide = true;
  @ViewChild(MatAccordion) accordion: MatAccordion;
 

  expensesForm: FormGroup;

  constructor(
    private transactionService: TransactionService,
     private router: Router, 
     private toastCtrl: ToastController,
     private db: AngularFireDatabase,
     private formBuilder: FormBuilder
    ) {
    
      }


 
   
   ionViewDidEnter() {
    this.ref = this.db.list('TransactionChart', ref => ref.orderByChild('month'));
  }
   
  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      // FirstName:  ['', [Validators.required]],
      // LastName: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Description: ['', [Validators.required]],
    });
  }

  ExpensesRecord() {
    console.log(this.transactionForm.value);
    this.transactionService.addTransaction(this.transactionForm.value).then(resp => {
      this.transactionForm.reset();
      this.router.navigateByUrl('/transaction')
    })
      .catch(error => {
        console.log(error);
      });
      this.ref.push(this.expenses).then(async () => {
      
        this.expenses = {
          value: '',
          month: '',
          expense: false
        };
        
        let toast = await this.toastCtrl.create({
          message: 'Charts Updated',
          duration: 3000
        });
        return await toast.present();
      })
  }



}
