import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablishmentViewPageRoutingModule } from './establishment-view-routing.module';

import { EstablishmentViewPage } from './establishment-view.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentViewPageRoutingModule,
    SharedModule
  ],
  declarations: [EstablishmentViewPage]
})
export class EstablishmentViewPageModule {}
