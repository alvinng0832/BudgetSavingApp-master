import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Profile } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.page.html',
  styleUrls: ['./edit-password.page.scss'],
})
export class EditPasswordPage {
  profile: Profile;
  newPassword: string;
  UID: string;
  user: any;
  constructor(
    private toastController: ToastController,
    public modalController: ModalController,
    private userService: UserService,
    private afAuth: AngularFireAuth,
  ) {

    this.profile = {} as Profile

    this.user = this.afAuth.auth.currentUser;
    this.UID = this.user.uid;
    console.log(this.UID);
    console.log(this.user.displayName);
    console.log(this.user.email);
  }


  close() {
    this.modalController.dismiss()
  }

  updatePassword() {
    this.userService.updatePassword(this.newPassword)
    this.profile.email = this.user.email;
    this.profile.id = this.UID;
    this.profile.username = this.user.displayName;
    this.profile.password = this.newPassword;
    this.userService.updateDatabaseProfile(this.profile, this.UID);

  }
}
