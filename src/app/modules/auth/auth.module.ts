import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {ImageCropperModalComponent} from '../../shared/components/image-cropper-modal/image-cropper-modal.component';
import {ImageCropperModule} from 'ngx-img-cropper';
import {IgxListModule} from 'igniteui-angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ImageCropperModalComponent
  ],
  exports: [
    ImageCropperModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    SharedModule,
    ImageCropperModule,
    IgxListModule,
    TranslateModule
  ]
})
export class AuthModule {
}
