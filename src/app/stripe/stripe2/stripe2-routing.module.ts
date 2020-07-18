import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stripe2Page } from './stripe2.page';

const routes: Routes = [
  {
    path: '',
    component: Stripe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stripe2PageRoutingModule {}
