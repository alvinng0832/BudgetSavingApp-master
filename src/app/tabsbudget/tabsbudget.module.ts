import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsbudgetPageRoutingModule } from './tabsbudget-routing.module';

import { TabsbudgetPage } from './tabsbudget.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsbudgetPageRoutingModule,
   
    
  ],
  declarations: [TabsbudgetPage]
})
export class TabsbudgetPageModule {}
