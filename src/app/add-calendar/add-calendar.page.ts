import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CalendarService } from '../services/calendar.service';

interface budgetRecord{
  endDate:string;
  startDate:string;
}
@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.page.html',
  styleUrls: ['./add-calendar.page.scss'],
})
export class AddCalendarPage implements OnInit {
  addCalendarForm: FormGroup;
  budgetdata:budgetRecord

  calendarList=[];

  
  constructor(
    private modalController: ModalController,
    
    private formBuilder: FormBuilder,
    private calendarService: CalendarService
    
    ) { 
      this.budgetdata = {} as budgetRecord;

    }

  
  ngOnInit() {
    this.addCalendarForm = this.formBuilder.group({
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]]

  })

  }

  
  addCalendar(){

    console.log(this.addCalendarForm.value);
    this.calendarService.addCalendar(this.addCalendarForm.value).then(resp => {
      this.addCalendarForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }


  // IBorrow(){
  //   this.router.navigateByUrl('/add-borrow')
  // }
  // ILent(){
  //   this.router.navigateByUrl('/add-lent')
  // }
  // removelentitem(ilent_id){
  //   this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(ilent_id).delete()
  // }

  // removeborrowitem(iborrowid){
  //   this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName2).doc(iborrowid).delete()
  // }
  
  // EditRecord(ilent){
  //   ilent.isEdit = true;
  //   ilent.Name = ilent.Name;
  //   ilent.Description = ilent.Description;
  //   ilent.NewAmount = ilent.NewAmount;

  // }

  // EditRecord1(iborrow){
  //   iborrow.isEdit = true;
  //   iborrow.Name = iborrow.Name;
  //   iborrow.Description = iborrow.Description;
  //   iborrow.NewAmount = iborrow.NewAmount;

  // }
  // UpdateRecord(debtsrow) {
  //   let ilent = {};
  //   ilent['Name'] = debtsrow.Name;
  //   ilent['Description'] = debtsrow.Description;
  //   ilent['NewAmount'] = debtsrow.NewAmount;
  //   this.ilentService.updateNote( ilent);  // not sure correct, 
  //   console.log('Debts are Successfully Added')
  //   debtsrow.isEdit = false;
   
  // }

  // UpdateRecord1(debtsrow) {
  //   let iborrow = {};
  //   iborrow['Name'] = debtsrow.Name;
  //   iborrow['Description'] = debtsrow.Description;
  //   iborrow['NewAmount'] = debtsrow.NewAmount;
  //   this.iborrowService.updateNote( debtsrow.id, iborrow);
  //   console.log('Debts are Successfully Added')
  //   debtsrow.isEdit = false;
   
  // }
  
 call(val){
   console.log(val)
 }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
