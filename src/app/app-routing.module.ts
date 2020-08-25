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
    redirectTo: 'home',
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
  },
  {
    path: 'stripe',
    loadChildren: () => import('./stripe/stripe/stripe.module').then( m => m.StripePageModule)
  },
  {
    path: 'stripe1',
    loadChildren: () => import('./stripe/stripe1/stripe1.module').then( m => m.Stripe1PageModule)
  },
  {
    path: 'stripe2',
    loadChildren: () => import('./stripe/stripe2/stripe2.module').then( m => m.Stripe2PageModule)
  },
  {
    path: 'stripe3',
    loadChildren: () => import('./stripe/stripe3/stripe3.module').then( m => m.Stripe3PageModule)
  },
  {
    path: 'stripe4',
    loadChildren: () => import('./stripe/stripe4/stripe4.module').then( m => m.Stripe4PageModule)
  },
  {
    path: 'stripe5',
    loadChildren: () => import('./stripe/stripe5/stripe5.module').then( m => m.Stripe5PageModule)
  },
  {
    path: 'add-expenses',
    loadChildren: () => import('./add-expenses/add-expenses.module').then( m => m.AddExpensesPageModule)
  },
  {
    path: 'debts',
    loadChildren: () => import('./debts/debts.module').then( m => m.DebtsPageModule)
  },
  {
    path: 'newgoal',
    loadChildren: () => import('./newgoal/newgoal.module').then( m => m.NewgoalPageModule)
  },
  {
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then( m => m.LearnPageModule)
  },
  {
    path: 'location-api',
    loadChildren: () => import('./location-api/location-api.module').then( m => m.LocationApiPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'goaldetails',
    loadChildren: () => import('./goaldetails/goaldetails.module').then( m => m.GoaldetailsPageModule)
  },
  {
    path: 'reachedgoaldetails',
    loadChildren: () => import('./reachedgoaldetails/reachedgoaldetails.module').then( m => m.ReachedgoaldetailsPageModule)
  },
  {
    path: 'learn-details',
    loadChildren: () => import('./learn-details/learn-details.module').then( m => m.LearnDetailsPageModule)
  },
  {
    path: 'add-income',
    loadChildren: () => import('./add-income/add-income.module').then( m => m.AddIncomePageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'expensedetails',
    loadChildren: () => import('./expensedetails/expensedetails.module').then( m => m.ExpensedetailsPageModule)
  },
  {
    path: 'debtrecord',
    loadChildren: () => import('./debtrecord/debtrecord.module').then( m => m.DebtrecordPageModule)
  },
  {
    path: 'add-lent',
    loadChildren: () => import('./add-lent/add-lent.module').then( m => m.AddLentPageModule)
  },
  {
    path: 'add-borrow',
    loadChildren: () => import('./add-borrow/add-borrow.module').then( m => m.AddBorrowPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  },
  {
    path: 'tabsbudget',
    loadChildren: () => import('./tabsbudget/tabsbudget.module').then( m => m.TabsbudgetPageModule)
  },
  {
    path: 'calculatedbudget',
    loadChildren: () => import('./calculatedbudget/calculatedbudget.module').then( m => m.CalculatedbudgetPageModule)
  },
  {
    path: 'add-calendar',
    loadChildren: () => import('./add-calendar/add-calendar.module').then( m => m.AddCalendarPageModule)
  },
  {
    path: 'edit-photo',
    loadChildren: () => import('./modals/edit-photo/edit-photo.module').then( m => m.EditPhotoPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./modals/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'edit-password',
    loadChildren: () => import('./modals/edit-password/edit-password.module').then( m => m.EditPasswordPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'tabsincome',
    loadChildren: () => import('./tabsincome/tabsincome.module').then( m => m.TabsincomePageModule)
  },






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
