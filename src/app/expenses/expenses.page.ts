import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../services/expense.service';
interface ExpensesRecord {
  FirstName: string;
  LastName: number;
  Amount: number;
  Date: Date;
  Tags:string;
  Category: string;
  Description: string;
}
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {
  expensesList=[];
  Expensedata: ExpensesRecord;
  
  selectTabs = 'recent';
  constructor(private expenseService: ExpenseService, private router:Router) {
    this.Expensedata = {} as ExpensesRecord;
   }

  ngOnInit() {
    this.expenseService.read_students().subscribe(data => {

      this.expensesList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          FirstName: e.payload.doc.data()['FirstName'],
          LastName: e.payload.doc.data()['LastName'],
          Amount: e.payload.doc.data()['Amount'],
          Date: e.payload.doc.data()['Date'],
          Tags: e.payload.doc.data()['Date'],
          Description: e.payload.doc.data()['Description'],
          Category: e.payload.doc.data()['Category']
        };
      })
      console.log(this.expensesList);

    });
  }
  Expenses(){
this.router.navigateByUrl('/expensedetails')
  }
  newExpenses(){
    this.router.navigateByUrl('/add-expenses')
  }
}
