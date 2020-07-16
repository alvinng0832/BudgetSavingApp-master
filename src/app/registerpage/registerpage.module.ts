import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterpagePageRoutingModule } from './registerpage-routing.module';

import { RegisterpagePage } from './registerpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterpagePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterpagePage]
})
export class RegisterpagePageModule {}
