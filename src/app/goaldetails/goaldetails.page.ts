import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { GoalsService } from '../services/goals.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
interface GoalsRecord {
  id:string
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
  collectionName= "addGoals"
  today: any;
  percent: number;
  goalsdata: GoalsRecord;
  circularValue: number;
  goalList = [];
  selectedDate: any;
  user: any;
  uid: any;
 
  
  constructor( private firestore: AngularFirestore,private afAuth: AngularFireAuth, private route: ActivatedRoute,private goalsservice: GoalsService , private router: Router, private firebaseService: FirebaseService, public navCtrl: NavController) {
    this.goalsdata = {} as GoalsRecord;
    this.user =JSON.parse(localStorage.getItem('user'))
    this.afAuth.auth.onAuthStateChanged((user) => {
     
      this.uid = user.uid
    })


   }

   ngOnInit() {
    this.firebaseService.Goal_students().subscribe(data => {
      console.log(data)
      this.goalList = data.map(e => {
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        const Name = e.payload.doc.data()['Name'];
        const TargetAmount = e.payload.doc.data()['TargetAmount'];
        const SavedAmount = e.payload.doc.data()['SavedAmount'];
        const DesiredDate = e.payload.doc.data()['DesiredDate'];
        const circularValue =  e.payload.doc.data()['SavedAmount']/ e.payload.doc.data()['TargetAmount'] * 100;


        return {id, Name, TargetAmount, SavedAmount, DesiredDate, circularValue, ...data}
          
      });
      
      console.log(this.goalList)
  })

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

  Reached(reachRecord, goal_id){
    console.log(reachRecord)
    return this.firestore.collection("users").doc(this.user.user.uid).collection('ReachedGoals').add(reachRecord).then(resp=> {
      this.router.navigateByUrl('/goals')
      this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(goal_id).delete();

    })
  }


  
}
