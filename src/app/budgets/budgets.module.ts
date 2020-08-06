import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BudgetsPageRoutingModule } from './budgets-routing.module';
import { BudgetsPage } from './budgets.page';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule
  ],
  declarations: [BudgetsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BudgetsPageModule {}
