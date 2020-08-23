import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.page.html',
  styleUrls: ['./edit-photo.page.scss'],
})
export class EditPhotoPage implements AfterViewInit {
  files: any;
  imgURL:any;
  @ViewChild('fileButton', { static: false }) fileButton;
  UID: string;
  user: any;
  constructor(
    public modalController: ModalController,
    private afAuth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private toastController: ToastController,
    public loadingController: LoadingController
  ) { 
    this.user = this.afAuth.auth.currentUser;
    this.UID = this.user.uid;
  }

  ngAfterViewInit() {
    
  }

  ionViewDidEnter() {
    this.openFile()
  }

  openFile() {
    this.fileButton.nativeElement.click();
  }

  fileChanged(event) {  
    console.log(event)


    this.files = event.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      this.imgURL = reader.result;
    };

    reader.readAsDataURL(event.target.files[0]);
    console.log(reader)
  }
  async uploadFil() {

    console.log(this.imgURL)
    if (this.imgURL) {
      try {
        const task = await this.afStorage.ref('/userProf').child(this.UID).put(this.files[0])
        return this.afStorage.ref(`userProf/${this.UID}`).getDownloadURL().toPromise()
      } catch (error) {
        this.presentToast("Error occured, please try again")
        console.log(error);
      }
    }
  }
  upload() {
    this.presentLoading()
    this.uploadFil().then(c => {
      this.afAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          user.updateProfile({
            photoURL: c
          }).then((s) => { // success uploaded
            console.log(s)
            this.close(true)
          }).catch(er => {
            this.close(false)
          })
          console.log(c)
        }
      })
    })
  }


  close(bool) {
    this.modalController.dismiss({
      'saved': bool
    })
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Saving photo',
    });
    await loading.present();

  
    console.log('Loading dismissed!');
  }
}
