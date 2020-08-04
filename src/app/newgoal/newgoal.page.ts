import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';

interface GoalsRecord {
  id:string;
  Name: string;
  TargetAmount: number;
  SavedAmount: number;
  DesiredDate: Date;

}
@Component({
  selector: 'app-newgoal',
  templateUrl: './newgoal.page.html',
  styleUrls: ['./newgoal.page.scss'],
})
export class NewgoalPage implements OnInit {


  iconList = [];
  studentList = [];
  goalsdata: GoalsRecord;
  studentForm: FormGroup;
  today: any;
  selectedDate: any;
  
  constructor( private router: Router, private afDB: AngularFireDatabase, private firebaseService: FirebaseService, private fb: FormBuilder) { 
    this.today = new Date().toISOString();
    this.goalsdata = {} as GoalsRecord;
  
  }
  

  

  ngOnInit() {
    this.studentForm = this.fb.group({
      Name: ['', [Validators.required]],
      TargetAmount: ['', [Validators.required]],
      SavedAmount: ['', [Validators.required]],
      DesiredDate: ['', [Validators.required]]
     
     

    })

  }

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };
  calcAge() {
    let today: any = new Date();
    let selectedDate: any = new Date(this.selectedDate);

    let age = Math.round((Math.abs(selectedDate - today) / (24 * 60 * 60 * 1000)) / 365);
  }



  CreateRecord() {
    console.log(this.studentForm.value);
    this.firebaseService.create_student(this.studentForm.value).then(resp => {
      this.studentForm.reset();
      this.router.navigateByUrl('/goals')
    })
      .catch(error => {
        console.log(error);
      });
  }
  
 




}
