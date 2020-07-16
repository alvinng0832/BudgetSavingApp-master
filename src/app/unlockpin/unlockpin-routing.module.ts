import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnlockpinPage } from './unlockpin.page';

const routes: Routes = [
  {
    path: '',
    component: UnlockpinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnlockpinPageRoutingModule {}
