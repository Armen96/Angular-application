import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../store';
import {AppState} from '../../../shared/ngrx/appState';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  @Input() recordName: string = "";
  public records$: Observable<any>;

  constructor(
    protected store: Store<AppState>
  ) {
    this.store.dispatch(new fromStore.LoadRecords());

    this.records$ = this.store.pipe(select(fromStore.getRecords));
  }
}
