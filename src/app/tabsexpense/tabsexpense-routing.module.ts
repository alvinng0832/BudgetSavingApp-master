import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsexpensePage } from './tabsexpense.page';

const routes: Routes = [
  {
    path: '',
    component: TabsexpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsexpensePageRoutingModule {}
