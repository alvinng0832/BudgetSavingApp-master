import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

interface Profile {
  id:string
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

  ProfileList: [];
  user: any;


  constructor( 
    private router: Router, 
    private firebaseService: FirebaseService, 
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService, 
    private fb: FormBuilder) {
    this.user = this.afAuth.auth.currentUser
    console.log(this.user)
    this.profile = {} as Profile
   }

  ngOnInit() {
    console.log(this.user)

    // this.authService.getProfile().subscribe(data => {

    //   this.ProfileList = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       username : e.payload.doc.data()['username'],
    //       email : e.payload.doc.data()['email'],
    //       password : e.payload.doc.data()['password'],
    //     };
    //   })
    //   console.log(this.ProfileList);

    // });

  }
}