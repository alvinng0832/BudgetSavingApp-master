import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

interface Profile {
  id:string;
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
  newPassword:string;
  UID:string;
  constructor( 
    private userService:UserService,
    private router: Router, 
    private firebaseService: FirebaseService, 
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService, 
    private fb: FormBuilder) {
    this.user = this.afAuth.auth.currentUser;
    this.UID = this.user.uid;
    console.log(this.UID);
    console.log(this.user.displayName);
    console.log(this.user.email);
    this.profile = {} as Profile
    //this.refUserDoc = this.firestore.doc(`users/${this.user.uid}`)
   }

  ngOnInit() {
    console.log(this.user)
    
  }
  updatePassword(){
    this.userService.updatePassword(this.newPassword);
    this.profile.email = this.user.email;
    this.profile.id = this.UID;
    this.profile.username = this.user.displayName;
    this.profile.password = this.newPassword;
    this.userService.updateDatabaseProfile(this.profile,this.UID);

  }
}