import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule {
}
