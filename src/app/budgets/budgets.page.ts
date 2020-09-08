import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalendarService } from '../services/calendar.service';
import { AddCalendarPage } from '../add-calendar/add-calendar.page';

import { AddExpensesPage } from '../add-expenses/add-expenses.page';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

interface budgetRecord {
  endDate: string;
  startDate: string;
}
@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.page.html',
  styleUrls: ['./budgets.page.scss'],
})
export class BudgetsPage implements OnInit {
  addCalendarForm: FormGroup;
  budgetdata: budgetRecord

  calendarList = [];
  user: any;
  collectionName = "Calendar"
  uid: string;
  constructor(
    private modalController: ModalController,
    private router: Router,
  
private firestore: AngularFirestore,
    private formBuilder: FormBuilder,
    private calendarService: CalendarService,
    private afAuth: AngularFireAuth,
  ) {
    this.budgetdata = {} as budgetRecord;
    this.user =JSON.parse(localStorage.getItem('user'))
    this.uid = this.afAuth.auth.currentUser.uid
  }


  ngOnInit() {
    this.addCalendarForm = this.formBuilder.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })

    this.calendarService.getCalendar(this.uid).subscribe(data => {
      console.log(data)
        this.calendarList = data.map(e => {
          const data = e.payload.doc.data();
          const id = e.payload.doc.id;

          return { id, ...data }
        })
       
       
      })
    }



  addCalendar() {

    console.log(this.addCalendarForm.value);
    this.calendarService.addCalendar(this.addCalendarForm.value).then(resp => {
      this.addCalendarForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  updateCalendar() {

    console.log(this.addCalendarForm.value);
    this.calendarService.addCalendar(this.addCalendarForm.value).then(resp => {
      this.addCalendarForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  call(val) {
    console.log(val)
  }

  

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCalendarPage
    });
    return await modal.present();
  }

  goToExpenses(passCalendarID) {
    // console.log(passC)
    let navigationExstras = {
      state: {
        obj: passCalendarID
      }
    };
    this.router.navigate(['/tabsbudget'], navigationExstras)
  }
  

  calendarModal(){
    this.router.navigateByUrl('/add-calendar')
  }

  editCalendar(calendar){
    calendar.isEdit = true;
    calendar.startDate = calendar.startDate;
    calendar.endDate = calendar.endDate;
  }
  UpdateRecord(calendarRow) {
    let calendar = {};
    calendar['startDate'] = calendarRow.startDate;
    calendar['endDate'] = calendarRow.endDate;
    this.calendarService.updateCalendar(calendarRow.id, calendar); 
    calendarRow.isEdit = false;
  }
  RemoveRecord (CalendarID) {
    this.firestore.collection("users").doc(this.user.uid).collection(this.collectionName).doc(CalendarID).delete()
  }


  counter(i: number) {
    return new Array(i);
}
}


