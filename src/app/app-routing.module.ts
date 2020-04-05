import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {LoginComponent} from './modules/auth/login/login.component';
import {RegisterComponent} from './modules/auth/register/register.component';
import {ProfileComponent} from './modules/auth/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ]},
  {
    path: 'records',
    loadChildren: () => import('./modules/records/records.module').then(m => m.RecordsModule)
  },
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
