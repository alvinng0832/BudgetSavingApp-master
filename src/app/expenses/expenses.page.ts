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
      console.log(data)
      this.expensesList = data.map(e => {
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;

        return {id, ...data}
          
        } );
      
      console.log(this.expensesList)
  })

}
    // this.expenseService.read_students().subscribe(data => {

      
    //   console.log(this.expensesList);

    // });
  
  Expenses(){
this.router.navigateByUrl('/expensedetails')
  }
  newExpenses(){
    this.router.navigateByUrl('/add-expenses')
  }
}