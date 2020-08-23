import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { EditPasswordPage } from 'src/app/modals/edit-password/edit-password.page';
import { EditProfilePage } from 'src/app/modals/edit-profile/edit-profile.page';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {

  UID: string;
  user: any;


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public modalController: ModalController,
    public popoverController: PopoverController
  ) {
    this.user = this.afAuth.auth.currentUser;
    this.UID = this.user.uid;

  }

  ngOnInit() { }
  
  

  close() {
    this.popoverController.dismiss()
  }

  open(model) {

    this.popoverController.dismiss({
      model: model
    })
  }

 

}
