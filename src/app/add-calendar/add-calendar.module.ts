import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCalendarPageRoutingModule } from './add-calendar-routing.module';

import { AddCalendarPage } from './add-calendar.page';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    AddCalendarPageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule, MatNativeDateModule,
    MatRippleModule
   
  ],
  declarations: [AddCalendarPage]
})
export class AddCalendarPageModule {}
