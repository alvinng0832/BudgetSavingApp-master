import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { EditProfilePage } from '../modals/edit-profile/edit-profile.page';
import { EditPhotoPage } from '../modals/edit-photo/edit-photo.page';
import { ProfileMenuComponent } from '../components/profile-menu/profile-menu.component';
import { EditPasswordPage } from '../modals/edit-password/edit-password.page';


interface Profile {
  id: string;
  username: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  profile: Profile;
  refUserDoc: AngularFirestoreDocument
  ProfileList: [];
  user: any;
  sub;

  UID: string;

  imageURL: any;
  @ViewChild('fileButton', { static: false }) fileButton;
  files: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private firebaseService: FirebaseService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private fb: FormBuilder,
    private afStorage: AngularFireStorage,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public loadingController: LoadingController
  ) {

    // this.profile = {} as Profile
    //this.refUserDoc = this.firestore.doc(`users/${this.user.uid}`)
  }

  ngOnInit() {
    console.log(this.user)
    this.user = this.afAuth.auth.currentUser;
    this.UID = this.user.uid;
    console.log(this.UID);
    console.log(this.user.displayName);
    console.log(this.user.email);

  
  }




  uploadFile() { this.fileButton.nativeElement.click(); }
  fileChanged(event) {
    this.files = event.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  async uploadFil() {
    let id = "f24ff2"
    console.log(this.imageURL)
    if (this.imageURL) {
      try {
        const task = await this.afStorage.ref('/userProf').child(id).put(this.files[0])
        return this.afStorage.ref(`userProf/${id}`).getDownloadURL().toPromise()
      } catch (error) {
        console.log(error);
      }
    }
  }
  upload() {
    this.uploadFil().then(c => {
      this.afAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          user.updateProfile({
            photoURL: c
          })
          console.log(c)
        }
      })
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EditPhotoPage,
      cssClass: 'edit-prof'
    })
    modal.onDidDismiss()
      .then((data) => {
        this.loadingController.dismiss()
        const saved = data["data"]["saved"];
        if (saved) {
          this.ngOnInit() // refresh content
        }
      });
    return await modal.present();

  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfileMenuComponent,
      cssClass: 'prof-pop',
      event: ev,
      translucent: true
    });
    popover.onDidDismiss().then(d => {
      const model = d["data"]["model"]
      model == "profile" ? this.openProf() : this.openPW()
    })
    return await popover.present();
  }






  async openPW() {
    this.popoverController.dismiss()
    const modal = await this.modalController.create({
      component: EditPasswordPage,
      cssClass: 'edit-pw'
    })

    return await modal.present();
  }





  async openProf() {
    this.popoverController.dismiss()
    const modal = await this.modalController.create({
      component: EditProfilePage,
      cssClass: 'edit-prof'
    })
    modal.onDidDismiss().then(d => {
      const update = d["data"]["update"]
      if (update) {
        this.ngOnInit()
      }
    })
    return await modal.present();
  }
}

// addTodo(){
//   this.itemsRef.add({
//     title: this.newTodo
//   })
//   .then(async resp => {

//     const imageUrl = await this.uploadFile(resp.id, this.selectedFile)

//     this.itemsRef.doc(resp.id).update({
//       id: resp.id,
//       imageUrl: imageUrl || null
//     })

//   }).catch(error => {
//     console.log(error);
//   })
// }

// async uploadFile(id, files):Promise {
//   if (files && files.length) {
//     try {
//       const task = await this.storage.ref('/images').child(id).put(files[0])
//       return this.fireStorage.ref(`images/${id}`).getDownloadURL().toPromise()
//     } catch (error) {
//       console.log(error);
//     } 
//   }
// }