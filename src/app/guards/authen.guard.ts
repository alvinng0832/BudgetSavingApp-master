import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {

  // this guard component is to ensure that the pages that requires to be in login state (security reason)
  // it always CHECKED before entering, using firebase fire auth
  // This guard page is like an if/else but more robust and dynamic
  // this guard ensures that u are in login state if not go back to root pages (login state).
  // u are free to change the root page (e.g. welcome page / sign in page)
  // this Guard component is to be apply on app-routing.module.ts
  // please carry on adding the Guard code on every page path whichever that needs to be in logon state
  // for e.g profilepage 

  // when it goes to profile page, it goes through the guard Component to check (whether u are in logon state or not) then > go to profile page


  check: any;
  constructor( private afAuth: AngularFireAuth, private navCtrl: NavController) {

    this.check = this.afAuth.auth.currentUser
  }

  // learn more about guards https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3

  canActivate(): boolean {

    if (!this.check) {
      this.navCtrl.navigateRoot('/loginpage')
      return false;
    }
    return true;
  }
  
}
