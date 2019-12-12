import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordsComponent} from './components/records.component';
import {RecordComponent} from './components/record/record.component';

const routes: Routes = [
  {
    path: '',
    component: RecordsComponent
  },
  {
    path: ':id',
    component: RecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutesModule {}
