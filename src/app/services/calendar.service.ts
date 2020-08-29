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


// export class CalendarService {
//   private calendar: Observable<Calendar[]>;
//   private calendarCollection: AngularFirestoreCollection<Calendar>;


//   documentRef: any;
//   uid: any
//   email: string;
//   user: any;
//   collectionName = "Calendar"

//   constructor(private firestore: AngularFirestore,
//     private afAuth: AngularFireAuth,
//     private authService: AuthService
//     ) {
//       this.user =JSON.parse(localStorage.getItem('user'))
//       this.afAuth.auth.onAuthStateChanged((user) => {
       
//         this.uid = user.uid
//       })
//     }

//      ngOnInit(){
//       this.calendarCollection =  this.firestore.collection('users').doc(this.user).collection<Calendar>('calendar');
//       this.calendar = this.calendarCollection.snapshotChanges().pipe(
//         map(actions => {
//           return actions.map(a => {
//             const data = a.payload.doc.data();
//             const id = a.payload.doc.id;
//             return { id, ...data };
//           });
//         })
//       );
//     }
    
  

//   addCalendar() {
//     return this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).add(this.calendar)
//   }

 

//   // addCalendar(calendar: Calendar){
    
//   //   return this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).add(calendar)
//   // }

//   // getCalendar() {
//   //   return this.firestore.collection('Calendar').doc(this.user.uid).collection(this.collectionName).snapshotChanges();
//   // }

  
// }