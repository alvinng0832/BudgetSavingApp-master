import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtrecordPageRoutingModule } from './debtrecord-routing.module';

import { DebtrecordPage } from './debtrecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtrecordPageRoutingModule
  ],
  declarations: [DebtrecordPage]
})
export class DebtrecordPageModule {}
