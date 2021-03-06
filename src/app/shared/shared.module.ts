import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {IgxGridModule} from 'igniteui-angular';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ImageCropperModalComponent} from './components/image-cropper-modal/image-cropper-modal.component';
import { ImageCropperModule } from 'ngx-img-cropper';
import { ReplaceUnderscorePipe } from './pipes/replace-underscore.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ImageCropperModalComponent,
    ReplaceUnderscorePipe
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    IgxGridModule,
    ImageCropperModalComponent,
    ReplaceUnderscorePipe
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    IgxGridModule,
    ImageCropperModule
  ]
})
export class SharedModule { }
