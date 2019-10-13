import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MyInterceptor} from './interceptors/my.interceptor';
import { DialogOverviewExampleComponent } from './shared/components/dialog-overview-example/dialog-overview-example.component';
import { AlertComponent } from './shared/components/alert/alert.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RecordsComponent,
    RecordComponent,
    DialogOverviewExampleComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers,{}),
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    RecordsService,AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  entryComponents: [DialogOverviewExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
