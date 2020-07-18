import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stripe3Page } from './stripe3.page';

const routes: Routes = [
  {
    path: '',
    component: Stripe3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stripe3PageRoutingModule {}
