import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import * as fromRecords from './record.reducer';

export interface RecordsState {
  records: fromRecords.State;
}

export const recordsReducers: ActionReducerMap<RecordsState> = {
  records: fromRecords.reducer
};

export const recordsFeatureSelector = createFeatureSelector<RecordsState>('records');
export const records = createSelector(recordsFeatureSelector, (state: RecordsState) => state.records);

export const getRecords = createSelector(records, fromRecords.getRecords);
export const getRecordsIsLoading = createSelector(records, fromRecords.getIsLoading);
export const getRecordsIsLoaded = createSelector(records, fromRecords.getIsLoaded);


