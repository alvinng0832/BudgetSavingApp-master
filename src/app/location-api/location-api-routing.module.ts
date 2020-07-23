import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationApiPage } from './location-api.page';

const routes: Routes = [
  {
    path: '',
    component: LocationApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationApiPageRoutingModule {}
