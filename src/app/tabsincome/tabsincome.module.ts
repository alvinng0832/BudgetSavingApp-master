import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsincomePageRoutingModule } from './tabsincome-routing.module';

import { TabsincomePage } from './tabsincome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TabsincomePageRoutingModule
  ],
  declarations: [TabsincomePage],
})
export class TabsincomePageModule {}

