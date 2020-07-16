import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanciallifePageRoutingModule } from './financiallife-routing.module';

import { FinanciallifePage } from './financiallife.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanciallifePageRoutingModule
  ],
  declarations: [FinanciallifePage]
})
export class FinanciallifePageModule {}
