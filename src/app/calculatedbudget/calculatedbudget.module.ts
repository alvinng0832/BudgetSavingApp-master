import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatedbudgetPageRoutingModule } from './calculatedbudget-routing.module';

import { CalculatedbudgetPage } from './calculatedbudget.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatedbudgetPageRoutingModule,
    RouterModule.forChild([{ path: '', component: CalculatedbudgetPageModule }])
  ],
  declarations: [CalculatedbudgetPage]
})
export class CalculatedbudgetPageModule {}
