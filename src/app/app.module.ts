import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {featureEffects} from './store';
import { SharedModule } from './shared/shared.module';
import { appServices } from './services';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {IgxBannerModule} from 'igniteui-angular';
import {HttpInterceptorService} from './modules/auth/http-interceptor.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {IgxGridSharedModule} from './shared/ignite-ui-defaults/igx-grid-shared-module.module';
import {UiToastService} from './shared/ui-toast/ui-toast.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
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
    EffectsModule.forRoot([...featureEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    IgxBannerModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    IgxGridSharedModule
  ],
  providers: [
    ...appServices,
    UiToastService,
    AuthGuard,
    // TODO later { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
