import { Injectable } from '@angular/core';
import { Calendar } from 'src/models/calendar';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  
  private calendar: Observable<Calendar[]>;
  private calendarCollection: AngularFirestoreCollection<Calendar>;
  
  documentRef: any;
  uid: any
  email: string;
  user: any;
  collectionName = "Calendar"
  
  constructor(private afAuth: AngularFireAuth, 
    private firestore: AngularFirestore, 
    private userService: UserService,
    private authService: AuthService) {
   
      this.user = JSON.parse(localStorage.getItem('user'));
      
  }

  addCalendar(calendar: Calendar){
    
    return this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).add(calendar)
  }

  getCalendar(uid) {
    console.log(uid)
    return this.firestore.collection('users').doc(uid).collection(this.collectionName).snapshotChanges();
  }

  updateCalendar(calendarID, calendar) {
    this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).doc(calendarID).update(calendar);
  }

  deleteCalendar(CalendarID) {
    this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).doc(CalendarID).delete()
  }

  

  
}


