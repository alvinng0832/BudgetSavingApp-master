import {Component, ViewChild, OnInit} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

//import { ExpenseService } from '../services/expense.service';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';
import { Observable } from 'rxjs';

import { ToastController, ModalController } from '@ionic/angular';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import { TabexpenseService } from '../services/tabexpense.service';
import { TabsincomePage } from '../tabsincome/tabsincome.page';
import { TabsexpensePage } from '../tabsexpense/tabsexpense.page';
import { ExpenseService } from '../services/expense.service';



 interface Expense {
  id?: string,
  FirstName: string,
  LastName: string,
  Amount: number,
  Description: string,
  Category: string,
  Tags: string,
  Date: string
  userId: string
}
interface Animal {
  name: string;

}


@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.page.html',
  styleUrls: ['./add-expenses.page.scss'],
})
export class AddExpensesPage implements OnInit{
  data: Observable<any[]>;
  ref: AngularFireList<any>;
  step = 0;

  // expensesForm: FormGroup;

  //muz code
  addExpenseForm: FormGroup;
  calID: any;
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
  toppings = new FormControl();
  expenses = {
    value: '',
    expense: false,
    month: ''
  }
  toppingList: string[] = ['coffee & tea', 'medical services', 'accomodation','cloths', 'gambling', 'shoes',
'accessories', 'adult fun', 'airplane', 'alcohol', 'apps', 'bicycle', 'birthday','books','building upkeep','bus','car','cosmetics', 'devices','drugs',
'electricity','quity purchase','events','ferry','fuel','furniture','games','groceries','hairdresser','heating','home improvement','income tax',
'insurance', 'internet','landline phone','lending'];
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

  validation_messages = {
    'amount': [
      { type: 'required', message: 'Enter a valid amount.' },
      { type: 'pattern', message: 'Enter a valid amount.' }
    ],
    // 'description': [
    //   { type: 'required', message: 'Description is required.' },
    //   { type: 'pattern', message: 'Description a valid email.' }
    // ],
    // 'type': [
    //   { type: 'required', message: 'Type is required.' },
    //   { type: 'pattern', message: 'Type must be at least 8 characters long.' }
    // ]
  };

  @ViewChild(MatAccordion) accordion: MatAccordion;
 

  expensesForm: FormGroup;

  constructor(
    private expenseService: TabexpenseService,
     private router: Router, 
     //private fb: FormBuilder,
     //private tabs: TabsbudgetPage,
     private toastCtrl: ToastController,

     private db: AngularFireDatabase,


     //muz code 
    private tabs: TabsbudgetPage,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ,

    ) {
      //muz code
      this.calID = this.tabs.data.id;
      console.log(this.tabs.data)
      }


     

   ionViewDidEnter() {
    this.ref = this.db.list('ExpensesChart', ref => ref.orderByChild('month'));
  }
   
  ngOnInit() {
 

     
    this.amount = new FormControl('', 
    [Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8)]);

      this.description = new FormControl('', Validators.required);
      this.type = new FormControl('', Validators.required);
  
      this.addExpenseForm = new FormGroup({
        amount: this.amount,
        description: this.description,
        type: this.type
      });
   

  }

  //starting of Muz codes
  addExpense() {

    console.log(this.addExpenseForm.value);

    this.expenseService.addExpense(this.calID, this.addExpenseForm.value).then(resp => {
      this.addExpenseForm.reset();
    })
      .catch(error => {
        console.log(error);
      });

  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: TabsexpensePage,
      componentProps: {
        data: this.tabs.data
      }
    });
    return await modal.present();
  }

 
}
