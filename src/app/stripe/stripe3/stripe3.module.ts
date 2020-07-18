import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stripe3PageRoutingModule } from './stripe3-routing.module';

import { Stripe3Page } from './stripe3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stripe3PageRoutingModule
  ],
  declarations: [Stripe3Page]
})
export class Stripe3PageModule {}
