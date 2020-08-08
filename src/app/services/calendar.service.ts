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
  user: any;
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private userService: UserService) {
   
    this.user = JSON.parse(localStorage.getItem('user'));


  }

  addCalendar(calendar: Calendar){
    
    return this.firestore.collection("Calendar").doc(this.uid).collection('transaction').add(calendar)
  }

  getCalendar() {
    console.log(this.user)
    return this.firestore.collection('Calendar').doc(this.user.user.uid).collection('transaction').snapshotChanges();
  }


}