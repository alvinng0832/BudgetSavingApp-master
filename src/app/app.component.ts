import { Component, RendererFactory2, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { HomePage } from './home/home.page';
import { Storage } from "@ionic/storage";
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = HomePage;
  darkMode: any

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private storage: Storage,
    private themeService: ThemeService,
  ) {
    this.initializeApp();
    this.darkMode = this.themeService.darkMode;
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
  gotoregister(){
    this.router.navigateByUrl('/registerpage')
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('dark-theme').then((val) => {
      console.log('Theme From Storage', val);
      if (val) {
        this.themeService.enableDark();
      }
    });
  }
  
  

}
