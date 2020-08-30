import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

declare var google;
@Component({
selector: 'app-location-api',
templateUrl: './location-api.page.html',
styleUrls: ['./location-api.page.scss'],
})
export class LocationApiPage implements OnInit{
    map: any;
    icon: any
    @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  
    infoWindows: any = [];
    markers: any = [
      {
          title: "<h1>Go Noodle House</h1>",
          subtitle: "<h3>Beyond Your Affortable Price of $9.90</h3> ",
          image: '<img src="assets/icon/image.jpg" width="500" height="200">',
          address: '#B3-37/38, 313@Somerset313 Orchard Rd, Singapore238895',
          operatinghours: '<h2> Daily 10am-10pm </h2>' ,
          socialcontact: '<h2> www.facebook.com/gonoodlehousesingapore </h2>',
          phonecontact: '<ion-button fill="outline"(click)="callUser()">Tel: +65 6363 5323 </ion-button>',
          moreinfo: 'More Information',
          FBshare: '<ion-button (click)="share()" fill="outline">Share via Facebook</ion-button>',
          latitude: "1.3015",
          longitude: "103.8384"
      },
      {
        title: "<h1>Moonstone Bar</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $8</h3> ",
        image: '<img src="assets/icon/image (1).jpg" width="500" height="200">',
        address: '103 Amoy St Singapore 069923',
        operatinghours: '<h2> Mon-Sat noon-midnight </h2>' ,
        socialcontact: '<h2> https://moonstone.sg/ </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser1()">Tel: +65 6610 3029 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(ionClick)="share1()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.281664",
        longitude: "103.845213"
      },
      {
        title: "<h1>Yakiniku Like</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $8.80</h3> ",
        image: '<img src="assets/icon/image (2).jpg" width="500" height="200">',
        address: '#B1-28, Paya Lebar Quarter, 10 Paya Lebar Rd Singapore 409057',
        operatinghours: '<h2> Mon-Sun 11am-10pm </h2>' ,
        socialcontact: '<h2> https://www.facebook.com/yakinikulikesg </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser2()">Tel: +65 6970 7397 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline" (click)="share2()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.317429",
        longitude: "103.892562"
     },
     {
        title: "<h1>Meatsmith</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $10.00</h3> ",
        image: '<img src="assets/icon/image (3).jpg" width="500" height="200">',
        address: '167-169 Telok Ayer St Singapore 068620',
        operatinghours: '<h2> Daily 11.30am-11.45pm </h2>' ,
        socialcontact: '<h2> https://meatsmith.com.sg/ </h2>',
        phonecontact: "<ion-button fill='outline'(click)='callUser3()'>Tel: +65 6221 2262 </ion-button>",
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share3()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.280124",
        longitude: "103.847477"
      },
      {
        title: "<h1>Ah Lock & Co.</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $7.80</h3> ",
        image: '<img src="assets/icon/image (4).jpg" width="500" height="200">',
        address: '#B2-22/4, Guoco Tower7 Wallich StSingapore078884',
        operatinghours: '<h2> Mon-Fri 7.30am-9pm; Sat & Sun 9.30am-8pm </h2>' ,
        socialcontact: '<h2> https://www.ahlocknco.com/ </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser4()">Tel: +65 8218 8696 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share4()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.277043,",
        longitude: "103.845751"
      },
      {
        title: "<h1>Fu Lin Bar & Kitchen</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $5.50</h3> ",
        image: '<img src="assets/icon/image (5).jpg" width="500" height="200">',
        address: '127 Telok Ayer St Singapore 068596',
        operatinghours: '<h2> Mon-Sat 10am-midnight; Sun 4pm-midnight </h2>' ,
        socialcontact: '<h2> https://www.facebook.com/fulinbarandkitchen </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser5()">Tel: +65 6423 0311 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share5()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.281061",
        longitude: "103.845745"
      },
      {
        title: "<h1>Seng Kee Black Chicken Herbal Soup</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $5.00</h3> ",
        image: '<img src="assets/icon/image (6).jpg" width="500" height="200">',
        address: '475 Changi Rd Singapore 419892',
        operatinghours: '<h2> Daily 11.30am-2am </h2>' ,
        socialcontact: '<h2> https://sengkeeherbalsoup.wixsite.com/sengkeeherbalsoup/our-food </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser6()">Tel: +65 6746 4089 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share6()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.319422",
        longitude: "103.910878"
      },
      {
        title: "<h1>WANTON</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $8.00</h3> ",
        image: '<img src="assets/icon/image (7).jpg" width="500" height="200">',
        address: '52 Amoy St Singapore 069878',
        operatinghours: '<h2> Mon-Thur 11am-11pm; Fri 11am-1am; Sat 5pm-1am. </h2>' ,
        socialcontact: '<h2> http://www.wantonsg.com/ </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser7()">Tel: +65 6221 1336 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share7()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.280143",
        longitude: "103.84678"
      },
      {
        title: "<h1>Chilli Pan Mee (Batu Rd)</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $7.80</h3> ",
        image: '<img src="assets/icon/image (8).jpg" width="500" height="200">',
        address: '#01-01 Far East Square22 China St Singapore 049564',
        operatinghours: '<h2> Mon-Sat 10am-midnight; Sun 4pm-midnight </h2>' ,
        socialcontact: '<h2> http://www.chillipanmee.com/ </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser8()">Tel: +65 6787 7889 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share8()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.283457",
        longitude: "103.847853"
      },
      {
        title: "<h1>The Salted Plum</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $10.00</h3> ",
        image: '<img src="assets/icon/image (9).jpg" width="500" height="200">',
        address: '10 Circular Rd Singapore 049366',
        operatinghours: '<h2> Mon-Sat noon–3pm, 6pm–10pm </h2>' ,
        socialcontact: '<h2> https://www.facebook.com/TheSaltedPlumSG </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser9()">Tel: +65 6260 0155 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share9()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook </ion-button>',
        latitude: "1.287783",
        longitude: "103.848887"
      },
      {
        title: "<h1>Ah-Tai Hainanese Chicken Rice</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $4.50</h3> ",
        image: '<img src="assets/icon/our-dinner.jpg" width="500" height="200">',
        address: '1 Kadayanallur Street Stall No. 7 Maxwell Food Centre, Singapore 069184 Singapore',
        operatinghours: '<h2> Daily Open 11am- 10pm </h2>' ,
        socialcontact: '<h2> https://www.facebook.com/AhTaiChickenRice </h2>',
        phonecontact: '<ion-button fill="outline" (click)="callUser10()">Tel: +65 8137 6559 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline" (click)="share10()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.2801",
        longitude: "103.8449"
      },
      {
        title: "<h1>Tiong Bahru Food Centre</h1>",
        subtitle: "<h3>Beyond Your Affortable Price of $5.00</h3> ",
        image: '<img src="assets/icon/photo4jpg.jpg" width="500" height="200">',
        address: '3 Seng Poh Road Green World #01-01, Singapore 168891 Singapore',
        operatinghours: '<h2>Daily Open 11am - 10pm </h2>' ,
        socialcontact: '<h2> http://tiongbahru.market/ </h2>',
        phonecontact: '<ion-button fill="outline"(click)="callUser11()">Tel: +65 6438 4380 </ion-button>',
        moreinfo: 'More Information',
        FBshare: '<ion-button fill="outline"(click)="share11()"><ion-icon name="share-social-outline"></ion-icon>Share via Facebook</ion-button>',
        latitude: "1.2857",
        longitude: "103.8341"
      },

     
    ];
  
    constructor(private socialSharing: SocialSharing,public platform: Platform, private callNumber: CallNumber) {}
  
    ionViewDidEnter() {
      this.showMap();
    }



  
    addMarkersToMap(markers) {
      
      for (let marker of markers) {
        
        let position = new google.maps.LatLng(marker.latitude, marker.longitude);
        var iconBase = 'https://maps.google.com/mapfiles/kml/paddle/'
        
        let mapMarker = new google.maps.Marker({
         
          position: position,
          title: marker.title,
          subtitle: marker.subtitle,
          image: marker.image,
          address: marker.address,
          operatinghours: marker.operatinghours,
          socialcontact: marker.socialcontact,
          phonecontact: marker.phonecontact,
          moreinfo: marker.moreinfo,
          FBshare: marker.FBshare,
          latitude: marker.latitude,
          longitude: marker.longitude,
          icon: iconBase + 'pink-stars.png',
        
        });
 
  
       
        mapMarker.setMap(this.map);
        this.addInfoWindowToMarker(mapMarker);
      }
      
    }

    
    ngOnInit(){
    }

    share() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://www.facebook.com/gonoodlehousesingapore').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share1() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://moonstone.sg/').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share2() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://www.facebook.com/yakinikulikesg').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share3() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://meatsmith.com.sg/').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share4() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://www.ahlocknco.com/').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share5() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://www.facebook.com/fulinbarandkitchen').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share6() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://sengkeeherbalsoup.wixsite.com/sengkeeherbalsoup/our-food ').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share7() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('http://www.wantonsg.com/').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share8() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('http://www.chillipanmee.com/').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share9() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share(' https://www.facebook.com/TheSaltedPlumSG').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
  
    share10() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('https://www.facebook.com/AhTaiChickenRice ').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
    share11() {
      this.platform.ready().then(async () => {
        await this.socialSharing.share('http://tiongbahru.market/ ').then(() => {
        }).catch((err) => {
          console.log(err)
        });
      });
    }
  
    addInfoWindowToMarker(marker) {
      let infoWindowContent = '<div id="content">' +
                                '<h1 id="firstHeading" class"firstHeading" >' + marker.title + '</h1>' + marker.subtitle + 
                                  marker.image + '<h2>Address:' + marker.address + '</h2>' + '<h1> Our Operating Hours: ' +
                                  marker.operatinghours +  '</h1>' + '<a href>' + marker.socialcontact + '</a href>' + 
                                  marker.phonecontact  + '<ion-button>' + marker.moreinfo + '</ion-button>' 
                                 + '<ion-button id="navigate">Get Direction</ion-button>' +  marker.FBshare + 
                              '</div>';
  
      let infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
        maxWidth: 500
        
      });
  
      marker.addListener('click', () => {
        this.closeAllInfoWindows();
        infoWindow.open(this.map, marker);
        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('navigate').addEventListener('click', () => {
            console.log('navigate button clicked!');
            // code to navigate using google maps app
            window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longitude);
          });
        });
  
      });
      this.infoWindows.push(infoWindow);
    }
  
    closeAllInfoWindows() {
      for(let window of this.infoWindows) {
        window.close();
      }
    }
  
    showMap() {
      const location = new google.maps.LatLng(1.290270, 103.851959);
      const options = {
        center: location,
        zoom: 16,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      this.addMarkersToMap(this.markers);
      
    }

    callUser(){
      this.callNumber.callNumber("+65 6363 5323", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser1(){
      this.callNumber.callNumber("+65 6610 3029", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser2(){
      this.callNumber.callNumber("+65 6970 7397", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser3(){
      this.callNumber.callNumber("+65 6221 2262", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser4(){
      this.callNumber.callNumber("+65 8218 8696", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser5(){
      this.callNumber.callNumber("+65 6423 0311", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser6(){
      this.callNumber.callNumber("+65 6746 4089", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser7(){
      this.callNumber.callNumber("+65 6221 1336", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser8(){
      this.callNumber.callNumber("+65 6787 7889", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser9(){
      this.callNumber.callNumber("+65 6260 0155", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser10(){
      this.callNumber.callNumber("+65 8137 6559", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    callUser11(){
      this.callNumber.callNumber("+65 6438 4380", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }




}