import { Component, RendererFactory2, Renderer2 ,OnInit} from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { HomePage } from './home/home.page';
import { Storage } from "@ionic/storage";
import { ThemeService } from './services/theme.service';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  rootPage: any = HomePage;
  darkMode: any
  user: any;


ngOnInit(){

}

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private storage: Storage,
    private menu: MenuController,
    private themeService: ThemeService,
    private authSer: AuthService,
    private afAuth: AngularFireAuth,
  ) {
    this.initializeApp();
    this.darkMode = this.themeService.darkMode;

    

    if (this.afAuth.auth.currentUser) {
      this.user = this.afAuth.auth.currentUser
    }
  }


  
  goto(url){
    this.router.navigateByUrl(`/${url}`)
    this.menu.close()
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
  
  logout() {
    this.authSer.logoutUser()
    this.menu.close()
  }
  

}
