import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromAction from '../actions/record.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RecordsService} from '../../../services/record/records.service';
import {of} from 'rxjs';

@Injectable()
export class RecordEffects {

  constructor(
    private actions$: Actions,
    protected recordsService: RecordsService
  ) {}

  @Effect()
  loadRecords$ = this.actions$.pipe(
    ofType(fromAction.LOAD_RECORDS),
    switchMap(() => {
      return this.recordsService.getRecords().pipe(
        map(response => new fromAction.LoadRecordsSuccess(response)),
        catchError(error => of(new fromAction.LoadRecordsFail(error)))
      );
    })
  );

  @Effect()
  createRecord$ = this.actions$.pipe(
    ofType(fromAction.CREATE_RECORD),
    map((action: fromAction.CreateRecord) => action.payload),
    switchMap((record) => {
      return this.recordsService.createRecord(record).pipe(
        map(response => {
          console.log('effect', response);
          return new fromAction.CreateRecordSuccess(response);
        }),
        catchError(error => of(new fromAction.CreateRecordFail(error)))
      );
    })
  );

  @Effect()
  updateRecord$ = this.actions$.pipe(
    ofType(fromAction.UPDATE_RECORD),
    map((action: fromAction.UpdateRecord) => action.payload),
    switchMap((record) => {
      return this.recordsService.updateRecord(record).pipe(
        map(response => {
          return new fromAction.UpdateRecordSuccess(response);
        }),
        catchError(error => of(new fromAction.UpdateRecordFail(error)))
      );
    })
  );

  @Effect()
  deleteRecord$ = this.actions$.pipe(
    ofType(fromAction.DELETE_RECORD),
    map((action: fromAction.DeleteRecord) => action.payload),
    switchMap((recordId) => {
      return this.recordsService.deleteRecord(recordId).pipe(
        map(response => {
          return new fromAction.DeleteRecordSuccess(recordId);
        }),
        catchError(error => of(new fromAction.DeleteRecordFail(error)))
      );
    })
  );

  @Effect()
  loadRecordById$ = this.actions$.pipe(
    ofType(fromAction.LOAD_RECORD_BY_ID),
    map((action: fromAction.LoadRecordById) => action.payload),
    switchMap((recordId) => {
      return this.recordsService.getRecordById(recordId).pipe(
        map(response => {
          return new fromAction.LoadRecordByIdSuccess(response);
        }),
        catchError(error => of(new fromAction.LoadRecordByIdFail(error)))
      );
    })
  );
}
