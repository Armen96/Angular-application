import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecordsRoutesModule} from './records.routes';
import {RecordsComponent} from './components/records.component';
import {SharedModule} from '../../shared/shared.module';
import {IgxGridSharedModule} from '../../shared/ignite-ui-defaults/igx-grid-shared-module.module';
import {TranslateModule} from '@ngx-translate/core';
import { RecordViewComponent } from './components/record-view/record-view.component';
import { RecordAddComponent } from './components/record-add/record-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {IgxTimePickerModule} from 'igniteui-angular';

@NgModule({
  declarations: [
    RecordsComponent,
    RecordViewComponent,
    RecordAddComponent
  ],
  exports: [],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    IgxGridSharedModule,
    RecordsRoutesModule,
    CommonModule,
    TranslateModule,
    NgxSpinnerModule,
    IgxTimePickerModule,
    FormsModule
  ]
})
export class RecordsModule { }
