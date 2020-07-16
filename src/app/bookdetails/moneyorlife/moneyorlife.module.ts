import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyorlifePageRoutingModule } from './moneyorlife-routing.module';

import { MoneyorlifePage } from './moneyorlife.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyorlifePageRoutingModule
  ],
  declarations: [MoneyorlifePage]
})
export class MoneyorlifePageModule {}
