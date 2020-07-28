import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExpensesPageRoutingModule } from './add-expenses-routing.module';

import { AddExpensesPage } from './add-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddExpensesPageRoutingModule,
    
  ],
  declarations: [AddExpensesPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AddExpensesPageModule {}
