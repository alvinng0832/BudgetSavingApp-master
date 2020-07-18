import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stripe1PageRoutingModule } from './stripe1-routing.module';

import { Stripe1Page } from './stripe1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stripe1PageRoutingModule
  ],
  declarations: [Stripe1Page]
})
export class Stripe1PageModule {}
