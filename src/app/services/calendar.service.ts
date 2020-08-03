import { Injectable } from '@angular/core';
import { Calendar } from 'src/models/calendar';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
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

  addCalendar(calendar: Calendar){
    
    return this.firestore.collection("Calendar").doc(this.uid).collection('transaction').add(calendar)
  }


}