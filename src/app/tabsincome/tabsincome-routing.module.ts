import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsincomePage } from './tabsincome.page';

const routes: Routes = [
  {
    path: '',
    component: TabsincomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsincomePageRoutingModule {}
