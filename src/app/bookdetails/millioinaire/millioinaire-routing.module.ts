import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MillioinairePage } from './millioinaire.page';

const routes: Routes = [
  {
    path: '',
    component: MillioinairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MillioinairePageRoutingModule {}
