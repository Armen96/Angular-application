import { Action } from '@ngrx/store';
import {PayloadAction} from '../../../shared/ngrx/payload-action';
import {RecordsInterface} from '../../../interfaces/records.interface';

export const LOAD_RECORDS = '[Records] LOAD_RECORDS';
export const LOAD_RECORDS_SUCCESS = '[Records] LOAD_RECORDS_SUCCESS';
export const LOAD_RECORDS_FAIL = '[Records] LOAD_RECORDS_FAIL';

export const CREATE_RECORD = '[Records] CREATE_RECORD';
export const CREATE_RECORD_SUCCESS = '[Records] CREATE_RECORD_SUCCESS';
export const CREATE_RECORD_FAIL = '[Records] CREATE_RECORD_FAIL';

export const UPDATE_RECORD = '[Records] UPDATE_RECORD';
export const UPDATE_RECORD_SUCCESS = '[Records] UPDATE_RECORD_SUCCESS';
export const UPDATE_RECORD_FAIL = '[Records] UPDATE_RECORD_FAIL';

export const DELETE_RECORD = '[Records] DELETE_RECORD';
export const DELETE_RECORD_SUCCESS = '[Records] DELETE_RECORD_SUCCESS';
export const DELETE_RECORD_FAIL = '[Records] DELETE_RECORD_FAIL';

export const LOAD_RECORD_BY_ID = '[Records] LOAD_RECORD_BY_ID';
export const LOAD_RECORD_BY_ID_SUCCESS = '[Records] LOAD_RECORD_BY_ID_SUCCESS';
export const LOAD_RECORD_BY_ID_FAIL = '[Records] LOAD_RECORD_BY_ID_FAIL';

export class LoadRecords implements Action {
  readonly type = LOAD_RECORDS;
}

export class LoadRecordsSuccess extends PayloadAction<RecordsInterface[]> {
  readonly type = LOAD_RECORDS_SUCCESS;
}

export class LoadRecordsFail extends PayloadAction<any> {
  readonly type = LOAD_RECORDS_FAIL;
}

export class CreateRecord extends PayloadAction<RecordsInterface> {
  readonly type = CREATE_RECORD;
}

export class CreateRecordSuccess extends PayloadAction<RecordsInterface> {
  readonly type = CREATE_RECORD_SUCCESS;
}

export class CreateRecordFail extends PayloadAction<any> {
  readonly type = CREATE_RECORD_FAIL;
}

export class UpdateRecord extends PayloadAction<RecordsInterface> {
  readonly type = UPDATE_RECORD;
}

export class UpdateRecordSuccess extends PayloadAction<RecordsInterface> {
  readonly type = UPDATE_RECORD_SUCCESS;
}

export class UpdateRecordFail extends PayloadAction<any> {
  readonly type = UPDATE_RECORD_FAIL;
}

export class DeleteRecord extends PayloadAction<number> {
  readonly type = DELETE_RECORD;
}

export class DeleteRecordSuccess extends PayloadAction<number> {
  readonly type = DELETE_RECORD_SUCCESS;
}

export class DeleteRecordFail extends PayloadAction<any> {
  readonly type = DELETE_RECORD_FAIL;
}

export class LoadRecordById extends PayloadAction<number> {
  readonly type = LOAD_RECORD_BY_ID;
}

export class LoadRecordByIdSuccess extends PayloadAction<RecordsInterface> {
  readonly type = LOAD_RECORD_BY_ID_SUCCESS;
}

export class LoadRecordByIdFail extends PayloadAction<any> {
  readonly type = LOAD_RECORD_BY_ID_FAIL;
}

export type RecordActions = LoadRecords
  | LoadRecordsSuccess
  | LoadRecordsFail
  | CreateRecord
  | CreateRecordSuccess
  | CreateRecordFail
  | UpdateRecord
  | UpdateRecordSuccess
  | UpdateRecordFail
  | DeleteRecord
  | DeleteRecordSuccess
  | DeleteRecordFail
  | LoadRecordById
  | LoadRecordByIdSuccess
  | LoadRecordByIdFail;
