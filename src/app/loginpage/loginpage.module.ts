import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpagePageRoutingModule } from './loginpage-routing.module';
import { Facebook } from '@ionic-native/facebook/ngx';

import { LoginPage } from './loginpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginpagePageRoutingModule
  ],
  declarations: [LoginPage],
  providers: [
    Facebook
  ]
})
export class LoginpagePageModule {}
