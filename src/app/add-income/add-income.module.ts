import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIncomePageRoutingModule } from './add-income-routing.module';

import { AddIncomePage } from './add-income.page';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddIncomePageRoutingModule,
    RouterModule.forChild([{ path: '', component: AddIncomePage }])
  ],
  declarations: [AddIncomePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AddIncomePageModule {}
