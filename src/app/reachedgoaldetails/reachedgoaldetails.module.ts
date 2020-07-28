import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReachedgoaldetailsPageRoutingModule } from './reachedgoaldetails-routing.module';

import { ReachedgoaldetailsPage } from './reachedgoaldetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReachedgoaldetailsPageRoutingModule
  ],
  declarations: [ReachedgoaldetailsPage]
})
export class ReachedgoaldetailsPageModule {}
