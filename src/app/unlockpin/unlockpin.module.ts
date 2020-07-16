import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnlockpinPageRoutingModule } from './unlockpin-routing.module';

import { UnlockpinPage } from './unlockpin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnlockpinPageRoutingModule
  ],
  declarations: [UnlockpinPage]
})
export class UnlockpinPageModule {}
