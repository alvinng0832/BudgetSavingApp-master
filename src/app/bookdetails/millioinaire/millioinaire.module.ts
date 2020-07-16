import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MillioinairePageRoutingModule } from './millioinaire-routing.module';

import { MillioinairePage } from './millioinaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MillioinairePageRoutingModule
  ],
  declarations: [MillioinairePage]
})
export class MillioinairePageModule {}
