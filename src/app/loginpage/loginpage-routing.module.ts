import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpagePage } from './loginpage.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginpagePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class LoginpagePageRoutingModule {}
