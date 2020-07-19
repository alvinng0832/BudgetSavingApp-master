import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewgoalPage } from './newgoal.page';

const routes: Routes = [
  {
    path: '',
    component: NewgoalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewgoalPageRoutingModule {}
