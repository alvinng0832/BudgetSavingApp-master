import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedLearnPageRoutingModule } from './saved-learn-routing.module';

import { SavedLearnPage } from './saved-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedLearnPageRoutingModule
  ],
  declarations: [SavedLearnPage]
})
export class SavedLearnPageModule {}
