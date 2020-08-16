import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {  IlentService } from '../services/ilent.service';
import {MatAccordion} from '@angular/material/expansion';
import { LentDebts } from 'src/models/ilent';


interface LentRecord {
  Name: string;
  Description: string;
  Amount: string;
  Date: string;
  DueDate: string;
  userId: string;
}

@Component({
  selector: 'app-add-lent',
  templateUrl: './add-lent.page.html',
  styleUrls: ['./add-lent.page.scss'],
})
export class AddLentPage implements OnInit {
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
  minDate: Date;
  maxDate: Date;
  Expensedata: LentRecord;
  newlent: LentDebts;
 
  ilent: LentDebts = {
    id : null,
    Name: "",
    Description: "",
    Amount: "",
    Date: "",
    DueDate: "",
    NewAmount:"",
    userId: null
  };
  
lentedForm: FormGroup;

RecordList=[];
@ViewChild(MatAccordion) accordion: MatAccordion;

  constructor( private ilentService: IlentService,  private fb: FormBuilder, private router: Router) {
    
    this.Expensedata = {} as LentRecord;
  const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   }

   ngOnInit() {
    this.lentedForm = this.fb.group({
      Name:  ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      DueDate: ['', [Validators.required]],
  })
}

LentRecord() {
    console.log(this.lentedForm.value);
    this.ilentService.addNote(this.lentedForm.value).then(resp => {
      this.lentedForm.reset();
      this.router.navigateByUrl('/debts')
    })
      .catch(error => {
        console.log(error);
      })
  }
 
}
