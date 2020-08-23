import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPhotoPageRoutingModule } from './edit-photo-routing.module';

import { EditPhotoPage } from './edit-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPhotoPageRoutingModule
  ],
  declarations: [EditPhotoPage]
})
export class EditPhotoPageModule {}
