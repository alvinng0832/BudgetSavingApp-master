import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurstorePageRoutingModule } from './ourstore-routing.module';

import { OurstorePage } from './ourstore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurstorePageRoutingModule
  ],
  declarations: [OurstorePage]
})
export class OurstorePageModule {}
