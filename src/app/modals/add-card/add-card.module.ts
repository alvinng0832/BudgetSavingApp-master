import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCardPageRoutingModule } from './add-card-routing.module';

import { AddCardPage } from './add-card.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddCardPageRoutingModule,
    NgxMaskIonicModule
  ],
  declarations: [AddCardPage,
    ]
})
export class AddCardPageModule {}
