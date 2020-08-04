import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebtrecordPage } from './debtrecord.page';

const routes: Routes = [
  {
    path: '',
    component: DebtrecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebtrecordPageRoutingModule {}
