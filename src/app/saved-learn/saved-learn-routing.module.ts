import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedLearnPage } from './saved-learn.page';

const routes: Routes = [
  {
    path: '',
    component: SavedLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedLearnPageRoutingModule {}
