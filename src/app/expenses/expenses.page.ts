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
        const FirstName = e.payload.doc.data()['FirstName'];
        const LastName = e.payload.doc.data()['LastName']
        const Amount = e.payload.doc.data()['Amount']
        const Date = e.payload.doc.data()['Date']
        const Tags = e.payload.doc.data()['Tags']
        const Category = e.payload.doc.data()['Category']
        const Description = e.payload.doc.data()['Description']


        return {id, FirstName, LastName, Amount, Date, Tags,Category,Description, ...data}
          
        } );
      
      console.log(this.expensesList)
  })
}
 
  Expenses(){
this.router.navigateByUrl('/expensedetails')
  }
  newExpenses(){
    this.router.navigateByUrl('/add-expenses')
  }
}