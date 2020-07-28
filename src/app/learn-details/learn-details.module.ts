import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnDetailsPageRoutingModule } from './learn-details-routing.module';

import { LearnDetailsPage } from './learn-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnDetailsPageRoutingModule
  ],
  declarations: [LearnDetailsPage]
})
export class LearnDetailsPageModule {}
