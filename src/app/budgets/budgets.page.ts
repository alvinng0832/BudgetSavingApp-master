import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { AddExpensesPage } from '../add-expenses/add-expenses.page';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalendarService } from '../services/calendar.service';

interface budgetRecord{
  endDate:string;
  startDate:string;
}
@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.page.html',
  styleUrls: ['./budgets.page.scss'],
})
export class BudgetsPage implements OnInit {
  addCalendarForm: FormGroup;
  budgetdata:budgetRecord
  
  constructor(
    private modalController: ModalController,
    
    private formBuilder: FormBuilder,
    private calendarService: CalendarService
    
    ) { 
      this.budgetdata = {} as budgetRecord;

    }


    ngOnInit() {
      this.addCalendarForm = this.formBuilder.group({
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]]
  
      })
  
    }

    addCalendar(){

      // this.expense.amount = this.addExpenseForm.controls.amount.value;
      // //this.expense.userId = this.userService.getUID();
      // this.expense.description = this.addExpenseForm.controls.description.value;
      // this.expense.type = this.addExpenseForm.controls.type.value;
      // this.expense.id = this.documentRef.id;
      // this.expenseService.addExpense(this.expense);
  
      console.log(this.addCalendarForm.value);
      this.calendarService.addCalendar(this.addCalendarForm.value).then(resp => {
        this.addCalendarForm.reset();
      })
        .catch(error => {
          console.log(error);
        });
    }
    
   call(val){
     console.log(val)
   }
  
  
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddExpensesPage
    });
    return await modal.present();
  }

  
}


