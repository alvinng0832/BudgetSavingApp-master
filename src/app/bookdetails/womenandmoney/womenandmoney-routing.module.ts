import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenandmoneyPage } from './womenandmoney.page';

const routes: Routes = [
  {
    path: '',
    component: WomenandmoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenandmoneyPageRoutingModule {}
