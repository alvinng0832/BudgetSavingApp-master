import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'unlockpin',
    loadChildren: () => import('./unlockpin/unlockpin.module').then( m => m.UnlockpinPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'budgets',
    loadChildren: () => import('./budgets/budgets.module').then( m => m.BudgetsPageModule)
  },
  {
    path: 'ourstore',
    loadChildren: () => import('./ourstore/ourstore.module').then( m => m.OurstorePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'moneyorlife',
    loadChildren: () => import('./bookdetails/moneyorlife/moneyorlife.module').then( m => m.MoneyorlifePageModule)
  },
  {
    path: 'financialdiet',
    loadChildren: () => import('./bookdetails/financialdiet/financialdiet.module').then( m => m.FinancialdietPageModule)
  },
  {
    path: 'womenandmoney',
    loadChildren: () => import('./bookdetails/womenandmoney/womenandmoney.module').then( m => m.WomenandmoneyPageModule)
  },
  {
    path: 'millioinaire',
    loadChildren: () => import('./bookdetails/millioinaire/millioinaire.module').then( m => m.MillioinairePageModule)
  },
  {
    path: 'financiallife',
    loadChildren: () => import('./bookdetails/financiallife/financiallife.module').then( m => m.FinanciallifePageModule)
  },
  {
    path: 'fearless',
    loadChildren: () => import('./bookdetails/fearless/fearless.module').then( m => m.FearlessPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'registerpage',
    loadChildren: () => import('./registerpage/registerpage.module').then( m => m.RegisterpagePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
