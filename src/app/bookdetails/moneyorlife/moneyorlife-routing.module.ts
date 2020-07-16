import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyorlifePage } from './moneyorlife.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyorlifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyorlifePageRoutingModule {}
