import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {IncomeService} from 'src/app/services/income.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {
  addIncomeForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder, 
    private incomeService: IncomeService

  ) { }

  ngOnInit() {
    this.addIncomeForm = this.formBuilder.group({
      amount: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl('')
      
    })

  }

  addIncome(){

    console.log(this.addIncomeForm.value);

    this.incomeService.addIncome(this.addIncomeForm.value).then(resp => {
      this.addIncomeForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }
  
 call(val){
   console.log(val)
 }

}
