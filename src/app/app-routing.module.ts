import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'authlogin',
    loadChildren: () => import('./authlogin/authlogin.module').then( m => m.AuthloginPageModule)
  },
  {
    path: 'authregister',
    loadChildren: () => import('./authregister/authregister.module').then( m => m.AuthregisterPageModule)
  },
  {
    path: 'services-auth',
    loadChildren: () => import('./services-auth/services-auth.module').then( m => m.ServicesAuthPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'ourstore',
    loadChildren: () => import('./ourstore/ourstore.module').then( m => m.OurstorePageModule)
  },
  {
    path: 'unlockpin',
    loadChildren: () => import('./unlockpin/unlockpin.module').then( m => m.UnlockpinPageModule)
  },
  {
    path: 'budgets',
    loadChildren: () => import('./budgets/budgets.module').then( m => m.BudgetsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'fearless',
    loadChildren: () => import('./bookdetails/fearless/fearless.module').then( m => m.FearlessPageModule)
  },
  {
    path: 'financialdiet',
    loadChildren: () => import('./bookdetails/financialdiet/financialdiet.module').then( m => m.FinancialdietPageModule)
  },
  {
    path: 'financiallife',
    loadChildren: () => import('./bookdetails/financiallife/financiallife.module').then( m => m.FinanciallifePageModule)
  },
  {
    path: 'moneyorlife',
    loadChildren: () => import('./bookdetails/moneyorlife/moneyorlife.module').then( m => m.MoneyorlifePageModule)
  },
  {
    path: 'womenandmoney',
    loadChildren: () => import('./bookdetails/womenandmoney/womenandmoney.module').then( m => m.WomenandmoneyPageModule)
  },
  {
    path: 'millioinaire',
    loadChildren: () => import('./bookdetails/millioinaire/millioinaire.module').then( m => m.MillioinairePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
