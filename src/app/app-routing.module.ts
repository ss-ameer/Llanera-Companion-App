import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', data: {title: 'Home'},
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'entry',
    loadChildren: () => import('./entry/entry.module').then( m => m.EntryPageModule)
  }, 
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'government',
    loadChildren: () => import('./government/government.module').then( m => m.GovernmentPageModule)
  },
  {
    path: 'categories', data: {title: 'Categories'},
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
