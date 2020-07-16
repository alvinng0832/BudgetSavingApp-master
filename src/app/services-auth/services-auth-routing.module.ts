import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesAuthPage } from './services-auth.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesAuthPageRoutingModule {}
