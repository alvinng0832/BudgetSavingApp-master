import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { Income } from 'src/models/income';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';


@Injectable({
  providedIn: 'root'
})
export class IncomeService  {

  private income: Observable<Income[]>;
  private incomeCollection: AngularFirestoreCollection<Income>;

  private tabs: TabsbudgetPage;

  documentRef: any;
  uid: any
  email: string;
  user: any;
  collectionName = "Income"
  calID: any;

  constructor(private afAuth: AngularFireAuth, 
    private firestore: AngularFirestore, 
    ) 
    
    {
    this.uid = this.afAuth.auth.currentUser
    
  }

  addIncome(id, income: Income){
    
    return this.firestore.collection("users").doc(this.user.user.uid).collection("Calendar").doc(id)
    .collection("Income").add(income)
  }

  getIncome(id) {
    return this.firestore.collection('users').doc(this.user.user.uid).collection("Calendar").doc(id)
    .collection("Income").snapshotChanges();

  }


}
