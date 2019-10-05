import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {RecordComponent} from '../components/records/record/record.component';
import {RecordsComponent} from '../components/records/records.component';
import {AuthGuard} from '../guards/auth.guard';
import {DelayResolver} from './resolvers/deley';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'records',
    component: RecordsComponent,
    resolve: [DelayResolver],
    children: [{
        path: ':id',
        component: RecordComponent
    }]
  },
  { path: 'redirectMe', redirectTo: '', pathMatch: 'full', canActivate: [ AuthGuard ] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    DelayResolver
  ]
})
export class AppRoutingModule { }
