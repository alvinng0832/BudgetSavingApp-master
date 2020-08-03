import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BudgetsPageRoutingModule } from './budgets-routing.module';
import { BudgetsPage } from './budgets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BudgetsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BudgetsPageModule {}
