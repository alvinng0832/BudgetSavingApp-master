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
  
 call(val){
   console.log(val)
 }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
