import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stripe5PageRoutingModule } from './stripe5-routing.module';

import { Stripe5Page } from './stripe5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stripe5PageRoutingModule
  ],
  declarations: [Stripe5Page]
})
export class Stripe5PageModule {}
