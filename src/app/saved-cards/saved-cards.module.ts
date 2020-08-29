import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedCardsPageRoutingModule } from './saved-cards-routing.module';

import { SavedCardsPage } from './saved-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedCardsPageRoutingModule
  ],
  declarations: [SavedCardsPage]
})
export class SavedCardsPageModule {}
