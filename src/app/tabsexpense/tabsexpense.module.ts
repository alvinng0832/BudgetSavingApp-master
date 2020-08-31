import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsexpensePageRoutingModule } from './tabsexpense-routing.module';

import { TabsexpensePage } from './tabsexpense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsexpensePageRoutingModule
  ],
  declarations: [TabsexpensePage]
})
export class TabsexpensePageModule {}
