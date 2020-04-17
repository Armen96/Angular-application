import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducer from '../reducers';

export interface AdminState {
  admin: fromReducer.AdminStateInterface;
}

export const adminFeatureSelector = createFeatureSelector<fromReducer.AdminStateInterface>('admin');

export const getUserList = createSelector(adminFeatureSelector, state => state.users);
export const getUserListLoading = createSelector(adminFeatureSelector, state => state.isLoading);
export const getUserListLoaded = createSelector(adminFeatureSelector, state => state.isLoaded);
