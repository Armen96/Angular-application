import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {IgxGridModule} from 'igniteui-angular';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    CommonModule, HeaderComponent, IgxGridModule
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    IgxGridModule
  ]
})
export class SharedModule { }
