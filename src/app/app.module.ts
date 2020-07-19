import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import {Stripe} from '@ionic-native/stripe/ngx';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {Keyboard} from '@ionic-native/keyboard/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AuthService, 
    Stripe,
    Storage,
    HttpClient,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
