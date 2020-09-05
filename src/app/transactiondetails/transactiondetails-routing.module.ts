import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactiondetailsPage } from './transactiondetails.page';

const routes: Routes = [
  {
    path: '',
    component: TransactiondetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactiondetailsPageRoutingModule {}
