import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  slideOpts = {
    speed: 400
    };
  constructor(private router: Router,
   private AuthService: AuthService,

    ) { }

  ngOnInit() {
    //To check if user is in login state.
     if (this.AuthService.userDetails()) {
       this.router.navigate(['/home']) 

     } else {
       this.router.navigate(['/login'])
     }
  }
  

  navigateToLogin() {
  this.router.navigate(['/loginpage']);
  }

}
