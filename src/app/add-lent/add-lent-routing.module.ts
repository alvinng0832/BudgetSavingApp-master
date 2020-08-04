import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLentPage } from './add-lent.page';

const routes: Routes = [
  {
    path: '',
    component: AddLentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLentPageRoutingModule {}
