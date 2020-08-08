import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {  IlentService } from '../services/ilent.service';
import {MatAccordion} from '@angular/material/expansion';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import { LentDebts } from 'src/models/ilent';
import { ExpenseService } from '../services/expense.service';

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
  Expensedata: LentRecord;
  newlent: LentDebts;
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }
  ilent: LentDebts = {
    id : null,
    Name: "",
    Description: "",
    Amount: "",
    Date: "",
    DueDate: "",
    userId: null
  };
  
lentedForm: FormGroup;
startDate = new Date(1990, 0, 1);

RecordList=[];
@ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private expensesService:ExpenseService, private ilentService: IlentService,  private fb: FormBuilder, private router: Router) {
    this.Expensedata = {} as LentRecord;

   }

  ngOnInit() {
   
}

LentRecord() {
    console.log(this.lentedForm.value);
    this.ilentService.addNote(this.lentedForm.value).then(() => {
      this.lentedForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
      return(this.lentedForm.value)
  }
}
