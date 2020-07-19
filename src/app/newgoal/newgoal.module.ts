import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewgoalPageRoutingModule } from './newgoal-routing.module';

import { NewgoalPage } from './newgoal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NewgoalPageRoutingModule,
    
  ],
  declarations: [NewgoalPage]
})
export class NewgoalPageModule {}
