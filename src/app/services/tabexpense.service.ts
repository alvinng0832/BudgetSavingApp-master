import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { Expense } from 'src/models/expense';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';

@Injectable({
  providedIn: 'root'
})
export class TabexpenseService {

  private expense: Observable<Expense>;
  private expenseCollection: AngularFirestoreCollection<Expense>;

  private tabs: TabsbudgetPage;

  documentRef: any;
  uid: any
  email: string;
  user: any;
  collectionName = "Expense"
  calID: any;

  constructor(private afAuth: AngularFireAuth, 
    private firestore: AngularFirestore, 
    private userService: UserService,
    private authService: AuthService
    ) 
    {
  
    this.uid = this.afAuth.auth.currentUser
    
  }

  addExpense(id, expense: Expense){
    
    return this.firestore.collection("users").doc(this.user.user.uid).collection("Calendar").doc(id)
    .collection("Expense").add(expense)
  }

  getExpense(id) {
    return this.firestore.collection('users').doc(this.user.user.uid).collection("Calendar").doc(id)
    .collection("Expense").snapshotChanges();
  
  }


}
