import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { Income } from 'src/models/income';


@Injectable({
  providedIn: 'root'
})
export class IncomeService  {
  documentRef: any;
  uid: any
  email: string;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private userService: UserService) {
   
    this.afAuth.auth.onAuthStateChanged((user) => {
      console.log(user)
      this.uid = user.uid
      this.email = user.email
    })
    

  }

  addIncome(income: Income){
    
    return this.firestore.collection("Income").doc(this.uid).collection('transaction').add(income)
  }


  userEmail() {
    return this.afAuth.auth.onAuthStateChanged(ds => {

    })
    
  }

}