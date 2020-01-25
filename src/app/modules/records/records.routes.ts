import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordsComponent} from './components/records.component';
import {RecordAddComponent} from './components/record-add/record-add.component';
import {RecordViewComponent} from './components/record-view/record-view.component';

const routes: Routes = [
  {
    path: '',
    component: RecordsComponent
  },
  {
    path: 'add',
    component: RecordAddComponent
  },
  {
    path: ':id',
    component: RecordViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutesModule {}
