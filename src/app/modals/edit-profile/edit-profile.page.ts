import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  username:any;
  email: any;
  constructor(
    public modalController: ModalController,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.username = this.afAuth.auth.currentUser.displayName;
  }
  close(bool) {
    this.modalController.dismiss({
      update: bool
    })
  }

  update() {
    console.log(this.username)
    this.presentLoading()
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        user.updateProfile({
          displayName: this.username

        }).then(suc => {
          this.presentToast("Updated successfully");
          this.loadingController.dismiss();
          this.close(true)
        }).catch(err => {
          this.presentToast("error occurred")
          this.loadingController.dismiss()
          this.modalController.dismiss()
        })
      }
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Updating Details',
    });
    await loading.present();

  
    console.log('Loading dismissed!');
 
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
