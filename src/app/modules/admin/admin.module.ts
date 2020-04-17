import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {adminReducer} from '../../store/admin/reducers';
import {IgxListModule} from 'igniteui-angular';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('admin', adminReducer),
    AdminRoutingModule,
    IgxListModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
