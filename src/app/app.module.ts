import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RecordsService} from './components/records/services/records.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MyInterceptor} from './shared/interceptors/my.interceptor';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {recordsEffects, recordsReducers} from './components/records/store';
import {SharedModule} from './shared/shared.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('records', recordsReducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(recordsEffects),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    RecordsService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
