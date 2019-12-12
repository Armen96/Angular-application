import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecordsRoutesModule} from './records.routes';
import {RecordsComponent} from './components/records.component';
import {RecordComponent} from './components/record/record.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    RecordsComponent,
    RecordComponent
  ],
  exports: [],
  imports: [
    SharedModule,
    RecordsRoutesModule,
    CommonModule
  ]
})
export class RecordsModule { }
