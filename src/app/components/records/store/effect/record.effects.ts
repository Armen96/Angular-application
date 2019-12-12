import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromAction from '../action/record.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RecordsService} from '../../services/records.service';
import {of} from 'rxjs';
import * as fromActions from '../action/record.actions';

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
        map(resp => new fromActions.LoadRecordsSuccess(resp)),
        catchError(error => of(new fromActions.LoadRecordsFail(error)))
      );
    })
  );
}
