import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

interface GoalsRecord {
  Name: string;
  TargetAmount: number;
  SavedAmount: number;
  DesiredDate: Date;
}
@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})


export class GoalsPage implements OnInit {
  
  studentList = [];
  uid: any
  goalsdata: GoalsRecord;
  selectTabs = 'recent';
  constructor(private router: Router, private firebaseService: FirebaseService) { 
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
        };
      })
      console.log(this.studentList);

    });
  }
  newgoals(){
  this.router.navigateByUrl('/newgoal')
  }

  RemoveRecord (record) {
    this.firebaseService.delete_student(record);
  }

  EditRecord(record) {
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


}
