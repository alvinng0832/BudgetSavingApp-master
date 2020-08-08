import { Component, OnInit } from '@angular/core';
import {  IlentService } from '../services/ilent.service';


@Component({
  selector: 'app-debts',
  templateUrl: './debts.page.html',
  styleUrls: ['./debts.page.scss'],
})
export class DebtsPage implements OnInit {



  selectTabs = 'recent';
  RecordList=[];
  constructor(private ilentService: IlentService) { 
    
  }

  ngOnInit() {
  
  }

}
