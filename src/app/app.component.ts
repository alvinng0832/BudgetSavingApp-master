import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { HomePage } from './home/home.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = HomePage;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
  }

  
  gotohome(){
    this.router.navigateByUrl('/home')
  }
  gotobudgets(){
    this.router.navigateByUrl('/budgets')
  }
  gotogoals(){
    this.router.navigateByUrl('/goals')
  }
  gotolocation(){
    this.router.navigateByUrl('/location')
  }
  gotologin(){
    this.router.navigateByUrl('/loginpage')
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
