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
    path: 'about', data: {title: 'About'},
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'government', data: {title: 'Government'},
    loadChildren: () => import('./government/government.module').then( m => m.GovernmentPageModule)
  },
  {
    path: 'categories', data: {title: 'Categories'},
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'establishment-view', data: {title: 'View Mode'},
    loadChildren: () => import('./establishment-view/establishment-view.module').then( m => m.EstablishmentViewPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
