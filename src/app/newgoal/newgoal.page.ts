import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { IonDatetime, ToastController } from '@ionic/angular';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';




interface Animal {
  name: string;

}
interface GoalsRecord {
  id:string;
  Name: string;
  TargetAmount: number;
  SavedAmount: number;
  DesiredDate: string;
}

@Component({
  selector: 'app-newgoal',
  templateUrl: './newgoal.page.html',
  styleUrls: ['./newgoal.page.scss'],

  
})
export class NewgoalPage implements OnInit {
  selected = 'option2';

  data: Observable<any[]>;
  ref: AngularFireList<any>;
  customPickerOptions: any;
  months = [
    {value: 0, value1: 0,name: 'January'},
    {value: 1, value1: 1,name: 'February'},
    {value: 2, value1: 2,name: 'March'},
    {value: 3, value1: 3,name: 'April'},
    {value: 4, value1: 4,name: 'May'},
    {value: 5, value1: 5,name: 'June'},
    {value: 6, value1: 6,name: 'July'},
    {value: 7, value1: 7,name: 'August'},
    {value: 8, value1: 8,name: 'September'},
    {value: 9, value1: 9,name: 'October'},
    {value: 10, value1: 10,name: 'November'},
    {value: 11, value1: 11,name: 'December'},
  ];
  date:any
  @ViewChild('mydt') mydt: IonDatetime;

  transaction = {
    value: '',
    value1: '',
    expense: false,
    month: ''
  }
  iconList = [];
  studentList = [];
  goalsdata: GoalsRecord;
  studentForm: FormGroup;
  today: any;
  selectedDate: any;
 

  constructor( private db: AngularFireDatabase,  private toastCtrl: ToastController,private router: Router, private afDB: AngularFireDatabase, private firebaseService: FirebaseService, private fb: FormBuilder) { 
   
   
    this.goalsdata = {} as GoalsRecord;
  
  }

  
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  animals: Animal[] = [
    {name:"New Vehicles"},
    {name:"New Home"},
    {name:"Holiday Trip"},
    {name:"Education"},
    {name:"Education"},
    {name:"Emergency"},
    {name:"HealthCare"},
    {name:"Party"},
    {name:"Kid Spoiling"},
    {name:"Charity"},
    {name:"Others"},
  ];
 

  ngOnInit() {
    this.studentForm = this.fb.group({
      Name: ['', [Validators.required]],
      TargetAmount: ['', [Validators.required]],
      SavedAmount: ['', [Validators.required]],
      DesiredDate: ['', [Validators.required]]
    })
  }
  ionViewDidEnter() {
    this.ref = this.db.list('GoalCharts', ref => ref.orderByChild('month'));
  }
  


  CreateRecord() {
    console.log(this.studentForm.value);
    this.firebaseService.create_student(this.studentForm.value).then(resp => {
      this.studentForm.reset();
      this.router.navigateByUrl('/home')
    })
      .catch(error => {
        console.log(error);
      });
      this.ref.push(this.transaction).then(async () => {
      
        this.transaction = {
          value: '',
          value1: '',
          month: '',
          expense: false
        };
        
        let toast = await this.toastCtrl.create({
          message: 'Charts Updated',
          duration: 3000
        });
        return await toast.present();
      })
  }
  
 




}
