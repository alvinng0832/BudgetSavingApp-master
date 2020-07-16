import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FearlessPageRoutingModule } from './fearless-routing.module';

import { FearlessPage } from './fearless.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FearlessPageRoutingModule
  ],
  declarations: [FearlessPage]
})
export class FearlessPageModule {}
