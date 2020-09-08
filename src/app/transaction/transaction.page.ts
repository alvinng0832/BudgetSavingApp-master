import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  expensesList=[];

  
  selectTabs = 'recent';
  constructor(private transactionService: TransactionService, private router:Router) {
  
   }

  ngOnInit() {
    this.transactionService.getTransaction().subscribe(data => {
      console.log(data)
      this.expensesList = data.map(e => {
        
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        // const FirstName = e.payload.doc.data()['FirstName'];
        // const LastName = e.payload.doc.data()['LastName']
        const Amount = e.payload.doc.data()['Amount']
        const Date = e.payload.doc.data()['Date']
        // const Tags = e.payload.doc.data()['Tags']
        const Category = e.payload.doc.data()['Category']
        const Description = e.payload.doc.data()['Description']


        return {id, Amount, Date,Category,Description, ...data}
          
        } );
      
      console.log(this.expensesList)
  })
}
 
  Expenses(){
this.router.navigateByUrl('/transactiondetails')
  }
  newExpenses(){
    this.router.navigateByUrl('/add-transaction')
  }
}