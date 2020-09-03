import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabsbudget',
  templateUrl: './tabsbudget.page.html',
  styleUrls: ['./tabsbudget.page.scss'],
})
export class TabsbudgetPage implements OnInit {
 
  data: any;
 
  constructor(private route: ActivatedRoute, private router: Router,
    ) 
    {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.obj;
        // console.log(this.data)
      }
    });
  }

  
  
  ngOnInit() {
  }

  

}
