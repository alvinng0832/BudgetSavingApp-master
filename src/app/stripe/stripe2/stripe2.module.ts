import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stripe2PageRoutingModule } from './stripe2-routing.module';

import { Stripe2Page } from './stripe2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stripe2PageRoutingModule
  ],
  declarations: [Stripe2Page]
})
export class Stripe2PageModule {}
