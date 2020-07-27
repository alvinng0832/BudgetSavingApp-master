import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

interface GoalsRecord {
  Name: string;
  TargetAmount: number;
  SavedAmount: number;
  DesiredDate: Date;
  bufferValue: number;
}

@Component({
  selector: 'app-goaldetails',
  templateUrl: './goaldetails.page.html',
  styleUrls: ['./goaldetails.page.scss'],
})


export class GoaldetailsPage implements OnInit {
  today: any;
  percent: number;
  goalsdata: GoalsRecord;
  circularValue: number;
  studentList = [];
  selectedDate: any;

 
  
  constructor(private router: Router, private firebaseService: FirebaseService, public navCtrl: NavController) {
    this.goalsdata = {} as GoalsRecord;
   }

   ngOnInit() {
    this.firebaseService.read_students().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          TargetAmount: e.payload.doc.data()['TargetAmount'],
          SavedAmount: e.payload.doc.data()['SavedAmount'],
          DesiredDate: e.payload.doc.data()['DesiredDate'],
          circularValue: e.payload.doc.data()['SavedAmount']/ e.payload.doc.data()['TargetAmount'] * 100
        };
      })
      console.log(this.studentList);

    });
  }

  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }

  back(){
    this.router.navigateByUrl('/goals')
  }
  

  editAmount(record) {
    record.isEdit = true;
    record.Name = record.Name;
    record.TargetAmount = record.TargetAmount;
    record.SavedAmount = record.SavedAmount;
    record.DesiredDate = record.DesiredDate;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.Name;
    record['TargetAmount'] = recordRow.TargetAmount;
    record['SavedAmount'] = recordRow.SavedAmount;
    record['DesiredDate'] = recordRow.DesiredDate;
    this.firebaseService.update_student( recordRow.id, record);
    recordRow.isEdit = false;
  }
  calcAge() {
    let today: any = new Date();
    let selectedDate: any = new Date(this.selectedDate);

    let age = Math.round((Math.abs(selectedDate - today) / (24 * 60 * 60 * 1000)) / 365);
  }
  
}
