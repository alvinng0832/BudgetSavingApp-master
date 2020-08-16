import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

interface GoalsRecord {
  Name: string;
  TargetAmount: number;
  SavedAmount: number;
  DesiredDate: Date;
  progressValue: number;
}
@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})


export class GoalsPage implements OnInit {
collectionName= "addGoals"
  studentList = [];
  uid: any
  user:any
  goalsdata: GoalsRecord;
  selectTabs = 'recent';
  constructor( private afAuth: AngularFireAuth,
    private router: Router, private firebaseService: FirebaseService, private firestore: AngularFirestore) { 
      
     this.goalsdata = {} as GoalsRecord;
     this.user =JSON.parse(localStorage.getItem('user'))
     this.afAuth.auth.onAuthStateChanged((user) => {
      
       this.uid = user.uid
     })
     console.log(this.user.user.uid)
  }

  ngOnInit() {
    this.firebaseService.read_students().subscribe(data => {
      console.log(data)
      this.studentList = data.map(e => {
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        const Name = e.payload.doc.data()['Name'];
        const TargetAmount = e.payload.doc.data()['TargetAmount'];
        const SavedAmount = e.payload.doc.data()['SavedAmount'];
        const DesiredDate = e.payload.doc.data()['DesiredDate'];
        const progressValue =  e.payload.doc.data()['SavedAmount'] / e.payload.doc.data()['TargetAmount'] ;


        return {id, Name, TargetAmount, SavedAmount, DesiredDate, progressValue, ...data}
          
      });
      
      console.log(this.studentList)
  })
}
  newgoals(){
  this.router.navigateByUrl('/newgoal')
  }

  details() {
        this.router.navigate(['/goaldetails']);
  }
  
  RemoveRecord (record_id) {
    this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(record_id).delete()
  }

  EditRecord(record) {
    record.isEdit = true;
    record.id = record.id
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
    this.firebaseService.update_student(recordRow.id, record); 
    recordRow.isEdit = false;

  }

  Reacheddetails(){
    
  }


}
