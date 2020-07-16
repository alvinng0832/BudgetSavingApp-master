import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurstorePage } from './ourstore.page';

const routes: Routes = [
  {
    path: '',
    component: OurstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurstorePageRoutingModule {}
