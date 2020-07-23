import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationApiPageRoutingModule } from './location-api-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { LocationApiPage } from './location-api.page';

const routes: Routes = [
 
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationApiPageRoutingModule ,
    RouterModule.forChild(routes)
  ],
  declarations: [LocationApiPage],
})
export class LocationApiPageModule {}
