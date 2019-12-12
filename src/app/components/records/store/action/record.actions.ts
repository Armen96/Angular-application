import { Action } from '@ngrx/store';
import {PayloadAction} from '../../../../shared/ngrx/payload-action';

export const LOAD_RECORDS = '[Records] LOAD_RECORDS';
export const LOAD_RECORDS_SUCCESS = '[Records] LOAD_RECORDS_SUCCESS';
export const LOAD_RECORDS_FAIL = '[Records] LOAD_RECORDS_FAIL';

export class LoadRecords implements Action {
  readonly type = LOAD_RECORDS;
}

export class LoadRecordsSuccess extends PayloadAction<any> {
  readonly type = LOAD_RECORDS_SUCCESS;
}

export class LoadRecordsFail extends PayloadAction<any> {
  readonly type = LOAD_RECORDS_FAIL;
}

export type RecordActions = LoadRecords
  | LoadRecordsSuccess
  | LoadRecordsFail;
