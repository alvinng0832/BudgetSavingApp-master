import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expensedetails',
  templateUrl: './expensedetails.page.html',
  styleUrls: ['./expensedetails.page.scss'],
})
export class ExpensedetailsPage implements OnInit {
  expensesList=[];
  navParams: any;
  id: any;
  constructor( private router:Router, private expenseService: ExpenseService) {

   }

  ngOnInit() {
    // this.expenseService.read_students().subscribe(data => {

    //   this.expensesList = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       FirstName: e.payload.doc.data()['FirstName'],
    //       LastName: e.payload.doc.data()['LastName'],
    //       Amount: e.payload.doc.data()['Amount'],
    //       Date: e.payload.doc.data()['Date'],
    //       Tags: e.payload.doc.data()['Tags'],
    //       Description: e.payload.doc.data()['Description'],
    //       Category: e.payload.doc.data()['Category'],
    //     };
    //   })
    //   console.log(this.expensesList);

    // });
  }

  Back(){
this.router.navigateByUrl('/expenses')
  }
  EditExpenses(expense) {
    expense.isEdit = true;
    expense.Name = expense.Name;
    expense.TargetAmount = expense.TargetAmount;
    expense.SavedAmount = expense.SavedAmount;
    expense.DesiredDate = expense.DesiredDate;
  }

   Remove(expense) {
    this.expenseService.delete_student(expense);
  }

  UpdateRecord(expenseRow) {
    let expense = {};
    expense['Name'] = expenseRow.Name;
    expense['TargetAmount'] = expenseRow.TargetAmount;
    expense['SavedAmount'] = expenseRow.SavedAmount;
    expense['DesiredDate'] = expenseRow.DesiredDate;
    this.expenseService.update_student( expenseRow.id, expense);
    expenseRow.isEdit = false;
  }
  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }
}
