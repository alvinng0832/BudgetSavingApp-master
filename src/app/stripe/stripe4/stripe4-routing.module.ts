import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stripe4Page } from './stripe4.page';

const routes: Routes = [
  {
    path: '',
    component: Stripe4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stripe4PageRoutingModule {}
