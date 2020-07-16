import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomenandmoneyPageRoutingModule } from './womenandmoney-routing.module';

import { WomenandmoneyPage } from './womenandmoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomenandmoneyPageRoutingModule
  ],
  declarations: [WomenandmoneyPage]
})
export class WomenandmoneyPageModule {}
