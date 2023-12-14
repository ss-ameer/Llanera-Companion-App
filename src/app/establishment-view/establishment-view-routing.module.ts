import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstablishmentViewPage } from './establishment-view.page';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentViewPageRoutingModule {}
