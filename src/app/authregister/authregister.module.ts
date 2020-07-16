import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthregisterPageRoutingModule } from './authregister-routing.module';

import { AuthregisterPage } from './authregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // this one important when ur page have forms and validations
    IonicModule,
    AuthregisterPageRoutingModule
  ],
  declarations: [AuthregisterPage]
})
export class AuthregisterPageModule {}
