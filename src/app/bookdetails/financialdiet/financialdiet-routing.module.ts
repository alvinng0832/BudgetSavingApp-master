import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialdietPage } from './financialdiet.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialdietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialdietPageRoutingModule {}
