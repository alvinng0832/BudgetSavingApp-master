import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stripe1Page } from './stripe1.page';

const routes: Routes = [
  {
    path: '',
    component: Stripe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stripe1PageRoutingModule {}
