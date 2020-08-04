import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesPageRoutingModule } from './expenses-routing.module';

import { ExpensesPage } from './expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    IonicModule,
    ExpensesPageRoutingModule,
    
  ],
  declarations: [ExpensesPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExpensesPageModule {}
