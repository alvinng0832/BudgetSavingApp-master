import { Component, OnInit } from '@angular/core';
import {ExpenseService} from 'src/app/services/expense.service';
import {Expense} from 'src/models/expense';
import { UserService } from '../user.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.page.html',
  styleUrls: ['./add-expenses.page.scss'],
})
export class AddExpensesPage implements OnInit {
  addExpenseForm: FormGroup;
  documentRef: any;
  expense: Expense = {
    id: null,
    amount: '',
    description: '',
    type: '',
 //   userId: null
  };
 
  constructor(
    // private fireStore: AngularFirestore, 
    private fb: FormBuilder, 
    private modalController: ModalController, 
    private expenseService:ExpenseService, 
    // private userService: UserService
    ) { 
    // this.documentRef = fireStore.doc("Expenses");
    
    this.addExpenseForm = this.fb.group({
    
      amount: [''],
      description: [''],
      type: [''],
     
    });
  }
  ngOnInit() {
  }
  dismissModal():void {
    this.modalController.dismiss().then().catch()
  
    }
  
    addExpense(){

      // this.expense.amount = this.addExpenseForm.controls.amount.value;
      // //this.expense.userId = this.userService.getUID();
      // this.expense.description = this.addExpenseForm.controls.description.value;
      // this.expense.type = this.addExpenseForm.controls.type.value;
      // this.expense.id = this.documentRef.id;
      // this.expenseService.addExpense(this.expense);

      console.log(this.addExpenseForm.value);
      this.expenseService.addExpense(this.addExpenseForm.value).then(resp => {
        this.addExpenseForm.reset();
      })
        .catch(error => {
          console.log(error);
        });
    }
  

}
