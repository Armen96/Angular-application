import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../../shared/shared.module';

import {IgxListModule} from 'igniteui-angular';
import {AngularMaterialModule} from '../../shared/angular-material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    IgxListModule,
    AngularMaterialModule,
    RouterModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
