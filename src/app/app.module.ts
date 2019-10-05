import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import {RecordsService} from './services/records.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';


import { reducers } from './store/reducers';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './routes/app-routing.module'
import {RouterModule} from '@angular/router';
import { RecordsComponent } from './components/records/records.component';
import { RecordComponent } from './components/records/record/record.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RecordsComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers,{}),
    RouterModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [RecordsService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
