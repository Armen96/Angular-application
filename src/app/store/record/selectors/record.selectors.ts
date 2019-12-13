import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRecords from '../reducers/record.reducers';

export interface RecordsState {
  records: fromRecords.State;
}

export const recordsFeatureSelector = createFeatureSelector<fromRecords.State>('records');

export const getRecords = createSelector(recordsFeatureSelector, state => state.records);
export const getRecord = createSelector(recordsFeatureSelector, state => state.selected);
export const getRecordsIsLoading = createSelector(recordsFeatureSelector, state => state.isLoading);
export const getRecordsIsLoaded = createSelector(recordsFeatureSelector, state => state.isLoaded);
