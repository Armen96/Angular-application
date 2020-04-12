import {Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../../store/record';
import {AppState} from '../../../shared/ngrx/appState';
import {IgxGridComponent} from 'igniteui-angular';
import {defaultIgxGridClipboardOptions} from '../../../shared/ignite-ui-defaults/igx-grid-clipboard-options-default';
import {NgxSpinnerService} from 'ngx-spinner';
import {skip, take} from 'rxjs/operators';
import {RecordsInterface} from '../../../interfaces/records.interface';
import {NgLog} from '../../../shared/decorators/NgLog';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
@NgLog()
export class RecordsComponent {
  @ViewChild('recordsListGrid', { read: IgxGridComponent, static: true })
  public recordsListGrid: IgxGridComponent;
  public records$: Observable<any>;
  public record: RecordsInterface;
  public readonly clipboardOptions = defaultIgxGridClipboardOptions;

  constructor(
    protected store: Store<AppState>,
    protected spinner: NgxSpinnerService
  ) {
    this.records$ = this.store.pipe(select(fromStore.getRecords));
  }

  handleRowSelection(event) {
    const recordId = event.newSelection[0];
    this.store.dispatch(new fromStore.LoadRecordById(recordId));
    this.store.pipe(select(fromStore.getRecord), skip(1), take(1)).subscribe(record => {
      this.record = record;
    });
  }

  onDialogOKSelected(event) {
    this.store.dispatch(new fromStore.DeleteRecord(this.record['_id']));
  }
}
