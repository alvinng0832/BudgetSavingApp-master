import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReachedgoaldetailsPage } from './reachedgoaldetails.page';

const routes: Routes = [
  {
    path: '',
    component: ReachedgoaldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReachedgoaldetailsPageRoutingModule {}
