import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsincomePageRoutingModule } from './tabsincome-routing.module';

import { TabsincomePage } from './tabsincome.page';
import { RouterModule } from '@angular/router';
import { TabsbudgetPage } from '../tabsbudget/tabsbudget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TabsincomePageRoutingModule,
    RouterModule.forChild([{ path: '', component: TabsincomePage }],
    )
  ],
  declarations: [TabsincomePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TabsincomePageModule {}

