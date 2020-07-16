import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesAuthPageRoutingModule } from './services-auth-routing.module';

import { ServicesAuthPage } from './services-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesAuthPageRoutingModule
  ],
  declarations: [ServicesAuthPage]
})
export class ServicesAuthPageModule {}
