import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationApiPageRoutingModule } from './location-api-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { LocationApiPage } from './location-api.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
const routes: Routes = [
  {
    path: '',
    component: LocationApiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationApiPageRoutingModule 
  ],
  declarations: [LocationApiPage],
  providers: [Geolocation]
})
export class LocationApiPageModule {}
