import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoaldetailsPage } from './goaldetails.page';

const routes: Routes = [
  {
    path: '',
    component: GoaldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoaldetailsPageRoutingModule {}
