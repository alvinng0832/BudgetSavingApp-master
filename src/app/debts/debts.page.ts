import { Component, OnInit } from '@angular/core';
import {  IlentService } from '../services/ilent.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-debts',
  templateUrl: './debts.page.html',
  styleUrls: ['./debts.page.scss'],
})
export class DebtsPage implements OnInit {


LentList=[];
  selectTabs = 'recent';
  RecordList=[];
  constructor(private router: Router, private ilentService: IlentService) { 
    
  }

  ngOnInit() {
    this.ilentService.getNotes().subscribe(data => {
      console.log(data)
      this.LentList = data.map(e => {
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        const Name = e.payload.doc.data()['Name'];
        const Description = e.payload.doc.data()['Description'];
        const Amount = e.payload.doc.data()['Amount'];
        const Date = e.payload.doc.data()['Date'];
        const DueDate =  e.payload.doc.data()['DueDate'];


        return {id, Name, Description, Amount, Date, DueDate, ...data}
          
      });
      
      console.log(this.LentList)
  })
  }
  IBorrow(){
    this.router.navigateByUrl('/add-borrow')
  }
  ILent(){
    this.router.navigateByUrl('/add-lent')
  }

}
