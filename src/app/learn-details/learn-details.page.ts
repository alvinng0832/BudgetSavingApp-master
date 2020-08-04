import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-learn-details',
  templateUrl: './learn-details.page.html',
  styleUrls: ['./learn-details.page.scss'],
})
export class LearnDetailsPage implements OnInit {

  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.obj;
        console.log(this.data)
      }
    })
   }

  ngOnInit() {
  }

}
