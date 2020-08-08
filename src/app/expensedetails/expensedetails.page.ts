import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-expensedetails',
  templateUrl: './expensedetails.page.html',
  styleUrls: ['./expensedetails.page.scss'],
})
export class ExpensedetailsPage implements OnInit {
  expensesList=[];
  navParams: any;
  id: any;
  user: any;
  uid: any;
  collectionName="Expenses"
  constructor(  private firestore: AngularFirestore, private afAuth: AngularFireAuth, private router:Router, private expenseService: ExpenseService) {
    this.user =JSON.parse(localStorage.getItem('user'))
    this.afAuth.auth.onAuthStateChanged((user) => {
     
      this.uid = user.uid
    })
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
          Tags: e.payload.doc.data()['Tags'],
          Description: e.payload.doc.data()['Description'],
          Category: e.payload.doc.data()['Category'],
        };
      })
      console.log(this.expensesList);

    });
  }

  Back(){
this.router.navigateByUrl('/expenses')
  }
 
  EditExpenses(expense) {
    expense.isEdit = true;
    expense.FirstName = expense.FirstName;
    expense.LastName = expense.LastName;
    expense.Amount = expense.Amount;
    expense.Date = expense.Date;
    expense.Tags = expense.Tags;
    expense.Description = expense.Description;
    expense.Category = expense.Category;
  }

   Remove(expense_id) {
    this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(expense_id).delete()
  }

  UpdateRecord(expenseRow) {
    let expense = {};
    expense['FirstName'] = expenseRow.FirstName;
    expense['LastName'] = expenseRow.LastName;
    expense['Amount'] = expenseRow.Amount;
    expense['Date'] = expenseRow.Date;
    expense['Tags'] = expenseRow.Tags;
    expense['Description'] = expenseRow.Description;
    expense['Category'] = expenseRow.Category;
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
