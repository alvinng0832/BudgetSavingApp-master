import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { Income } from 'src/models/income';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IncomeService  {

  private income: Observable<Income[]>;
  private incomeCollection: AngularFirestoreCollection<Income>;

  documentRef: any;
  uid: any
  email: string;
  user: any;
  collectionName = "Income"

  constructor(private afAuth: AngularFireAuth, 
    private firestore: AngularFirestore, 
    private userService: UserService,
    private authService: AuthService) {
   
    this.afAuth.auth.onAuthStateChanged((user) => {
      console.log(user)
      this.uid = user.uid
      this.email = user.email
    })

    this.user = JSON.parse(localStorage.getItem('user'));
    

  }

  addIncome(id, income: Income){
    
    return this.firestore.collection("users").doc(this.user.uid).collection("Calendar").doc(id)
    .collection("Income").add(income)
  }


}
