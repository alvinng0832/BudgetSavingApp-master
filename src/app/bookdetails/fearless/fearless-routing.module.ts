import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FearlessPage } from './fearless.page';

const routes: Routes = [
  {
    path: '',
    component: FearlessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FearlessPageRoutingModule {}
