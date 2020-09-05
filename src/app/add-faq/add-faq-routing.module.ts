import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFaqPage } from './add-faq.page';

const routes: Routes = [
  {
    path: '',
    component: AddFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFaqPageRoutingModule {}
