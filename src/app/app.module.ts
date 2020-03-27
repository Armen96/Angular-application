import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {recordReducer, featureEffects, authReducer} from './store';
import { SharedModule } from './shared/shared.module';
import { appServices } from './services';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {IgxBannerModule, IgxListModule} from 'igniteui-angular';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import {HttpInterceptorService} from './modules/auth/http-interceptor.service';
import { ProfileComponent } from './modules/auth/profile/profile.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({
      records: recordReducer,
      auth: authReducer
    }),
    EffectsModule.forRoot([...featureEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    IgxListModule,
    IgxBannerModule
  ],
  providers: [
    ...appServices,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
