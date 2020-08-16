  
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  constructor(
    public platform: Platform,
    private socialSharing: SocialSharing) {
  }

  // Share Options
  share() {
    this.platform.ready().then(async () => {
      await this.socialSharing.share('I love Ionic').then(() => {
      }).catch((err) => {
        console.log(err)
      });
    });
  }

  // Share Via Email
  shareViaEmail() {
    this.socialSharing.canShareViaEmail().then(() => {
      this.platform.ready().then(() => {
        this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org'])
      });
    }).catch((err) => {
      alert('Email not available')
    })
  }

  // Share Via WhatsApp
  shareViaWhatsapp() {
    this.socialSharing.shareViaWhatsApp('Hello WhatsApp', null, 'https://codevampires.com/')
      .then(() => {
        console.log('It works');
      }).catch(() => {
        alert('WhatsApp not available')
      });
  }

  // Share Via Facebook
  shareViaFacebook() {
    this.socialSharing.shareViaFacebook('Hello Friends', null, 'https://codevampires.com/')
      .then(() => {
        console.log('It works');
      }).catch(() => {
        alert('Facebook not available')
      });
  }

  // Share Via Twitter
  shareViaTwitter() {
    this.socialSharing.shareViaTwitter('Hello Twitter', null, 'https://codevampires.com/')
      .then(() => {
        console.log('It works');
      }).catch(() => {
        alert('Twitter not available');
      });
  }

  // Share Via Instagram
  shareViaInstagram() {
    this.socialSharing.shareViaInstagram('Hello Instagram', null)
      .then(() => {
        console.log('It works');
      }).catch(() => {
        alert('Instagram not available');
      });
  }

  // Share via SMS
  shareViaSMS() {
    this.socialSharing.shareViaSMS('Hello', '+999 123123 123')
      .then(() => {
        console.log('It works');
      }).catch(() => {
        alert('Not available');
      });
  }

  ngOnInit(){
    
  }

}