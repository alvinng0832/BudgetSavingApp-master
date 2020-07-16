import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanciallifePage } from './financiallife.page';

const routes: Routes = [
  {
    path: '',
    component: FinanciallifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanciallifePageRoutingModule {}
