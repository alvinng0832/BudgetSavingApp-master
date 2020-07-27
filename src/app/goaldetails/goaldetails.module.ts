import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoaldetailsPageRoutingModule } from './goaldetails-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { GoaldetailsPage } from './goaldetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoaldetailsPageRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundColor: "#ece4e4",
      backgroundGradientStopColor: "#ffffff",
      backgroundOpacity: 1,
      backgroundStrokeWidth: 10,
      backgroundPadding: 10,
      radius: 100,
      space: 6,
      toFixed: 1,
      maxPercent: 200,
      unitsFontSize: "20",
      unitsFontWeight: "1100",
      outerStrokeWidth: 50,
      outerStrokeColor: "#abff24",
      outerStrokeGradientStopColor: "#000000",
      innerStrokeColor: "#3d9bff",
      innerStrokeWidth: 4,
      titleFontSize: "35",
      titleFontWeight: "600",
      subtitleFontSize: "20",
      subtitleFontWeight: "1000",
      imageHeight: 97,
      imageWidth: 96,
  
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [GoaldetailsPage]

})
export class GoaldetailsPageModule {}
