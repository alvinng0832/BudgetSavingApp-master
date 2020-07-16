import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialdietPageRoutingModule } from './financialdiet-routing.module';

import { FinancialdietPage } from './financialdiet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancialdietPageRoutingModule
  ],
  declarations: [FinancialdietPage]
})
export class FinancialdietPageModule {}
