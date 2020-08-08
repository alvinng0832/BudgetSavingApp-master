import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatedbudgetPage } from './calculatedbudget.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatedbudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatedbudgetPageRoutingModule {}
