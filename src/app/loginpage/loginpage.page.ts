import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@aketianxiu.com.sg', password);
      if(res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        });
        this.router.navigateByUrl('/home');
      }
    } catch(err) {
      console.dir(err)
      if (err.code === "auth/user-not-found") {
        console.log("User not found")
      }
    }
  }

  
  facebook(){
  }
  gotoRegisterPage(){
    this.router.navigateByUrl('/registerpage');
  }
  ForgetPassword(){
  }
  google(){
  }
  instagram(){

  }
}

