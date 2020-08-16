import {Component, ViewChild, OnInit} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../services/expense.service';
import { Expense } from 'src/models/expense';

interface Animal {
  name: string;

}
interface ExpensesRecord {
  FirstName: string;
  LastName: string;
  Amount: string;
  Date: Date;
  Category: string;
  Tags: string;
  Description: string;
}

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.page.html',
  styleUrls: ['./add-expenses.page.scss'],
})
export class AddExpensesPage implements OnInit{
  step = 0;

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
  expense: Expense = {
    id: null,
    FirstName: '',
    LastName: '',
    Amount: '',
    Description: '',
    Category: '',
    Tags:'',
    Date: '',
    userId: null
  };
  uid:any
  hide = true;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  Expensedata: ExpensesRecord;
  expensesForm: FormGroup;
  constructor(private expensesService:ExpenseService,  private router: Router, private fb: FormBuilder) {
   
    this.Expensedata = {} as ExpensesRecord;
   }
   
   

  ngOnInit() {
    this.expensesForm = this.fb.group({
      FirstName:  ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Tags: ['', [Validators.required]],
      Description: ['', [Validators.required]],
    });

     
   

  }
  ExpensesRecord() {
    console.log(this.expensesForm.value);
    this.expensesService.addExpense(this.expensesForm.value).then(resp => {
      this.expensesForm.reset();
      this.router.navigateByUrl('/expenses')
    })
      .catch(error => {
        console.log(error);
      });
  }
}
