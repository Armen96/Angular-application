import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'records', loadChildren: './components/records/records.module#RecordsModule' },
  { path: 'redirectMe', redirectTo: '', pathMatch: 'full', canActivate: [ AuthGuard ] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: []
})
export class AppRoutingModule { }
