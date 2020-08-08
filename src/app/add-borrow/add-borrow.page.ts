import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import { BorrowDebts } from 'src/models/iborrow';
import { IborrowService } from '../services/iborrow.service';
interface BorrowRecord {
  Name: string;
  Description: string;
  Amount: string;
  Date: string;
  DueDate: string;
  userId: string;
}
@Component({
  selector: 'app-add-borrow',
  templateUrl: './add-borrow.page.html',
  styleUrls: ['./add-borrow.page.scss'],
})
export class AddBorrowPage implements OnInit {

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }
  iborrow: BorrowDebts = {
    id : null,
    Name: "",
    Description: "",
    Amount: "",
    Date: "",
    DueDate: "",
    userId: null
  };
  startDate = new Date(1990, 0, 1);
  @ViewChild(MatAccordion) accordion: MatAccordion;
  Expensedata: BorrowRecord;
  constructor(private iborrowService: IborrowService, private fb : FormBuilder, private router: Router) { 
    this.Expensedata = {} as BorrowRecord;
  }
  BorrowForm: FormGroup;
  ngOnInit() {
    this.BorrowForm = this.fb.group({
      Name:  ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      DueDate: ['', [Validators.required]]
  })
  console.log(this.iborrowService.getNotes().snapshotChanges())
}

BorrowRecord(){
  // console.log(this.BorrowForm.value);
  this.iborrowService.addNote(this.BorrowForm.value).then(resp => {
    this.BorrowForm.reset();
  })
    .catch(error => {
      console.log(error);
    });
}

}
