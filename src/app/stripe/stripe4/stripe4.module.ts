import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stripe4PageRoutingModule } from './stripe4-routing.module';

import { Stripe4Page } from './stripe4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stripe4PageRoutingModule
  ],
  declarations: [Stripe4Page]
})
export class Stripe4PageModule {}
