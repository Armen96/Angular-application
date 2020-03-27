import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducers';

export interface AuthState {
  auth: fromAuth.State;
}

export const authFeatureSelector = createFeatureSelector<fromAuth.State>('auth');

export const getUser = createSelector(authFeatureSelector, state => state.user);
export const getToken = createSelector(authFeatureSelector, state => state.token);
export const getUsersList = createSelector(authFeatureSelector, state => state.usersList);
export const getUserIsLoading = createSelector(authFeatureSelector, state => state.isLoading);
export const getUserIsLoaded = createSelector(authFeatureSelector, state => state.isLoaded);
