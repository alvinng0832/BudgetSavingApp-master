import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IncomeService } from 'src/app/services/income.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {
  addIncomeForm: FormGroup;
  calID: any;


  constructor(
    private formBuilder: FormBuilder,
    private incomeService: IncomeService,
    private route: ActivatedRoute, private router: Router,
    private tabs: TabsbudgetPage,

  ) {
    this.calID = this.tabs.data.id;
  }

  ngOnInit() {
    this.addIncomeForm = this.formBuilder.group({
      amount: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl('')

    })




  }

  addIncome() {

    console.log(this.addIncomeForm.value);

    this.incomeService.addIncome(this.calID, this.addIncomeForm.value).then(resp => {
      this.addIncomeForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  call(val) {
    console.log(val)
  }

}
