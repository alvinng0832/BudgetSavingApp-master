import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsbudgetPage } from './tabsbudget.page';

const routes: Routes = [
  {
    path: '',
    component: TabsbudgetPage,
    children: [
      {
        path: 'add-expenses',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-expenses/add-expenses.module').then(m => m.AddExpensesPageModule)
          },
        ]
      },
      {
        path: 'add-income',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-income/add-income.module').then(m => m.AddIncomePageModule)
          }
        ]
      },
      {
        path: 'calculatedbudget',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../calculatedbudget/calculatedbudget.module').then(m => m.CalculatedbudgetPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabsbudget/add-expenses',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabsbudget/add-expenses',
    pathMatch: 'full',
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsbudgetPageRoutingModule {}
