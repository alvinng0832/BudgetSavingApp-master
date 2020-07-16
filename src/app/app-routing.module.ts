import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
