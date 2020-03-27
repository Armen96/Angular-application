import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromAction from '../actions/auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from '../../../services';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    protected authService: AuthService
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(fromAction.LOGIN),
    map((action: fromAction.Register) => action.payload),
    switchMap((data) => {
      return this.authService.login(data.email, data.password).pipe(
        map(response => new fromAction.LoginSuccess(response)),
        catchError(error => of(new fromAction.LogoutFail(error)))
      );
    })
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(fromAction.REGISTER),
    map((action: fromAction.Register) => action.payload),
    switchMap((data) => {
      return this.authService.register(data.name, data.email, data.password).pipe(
        map(response => {
          return new fromAction.RegisterSuccess(response);
        }),
        catchError(error => of(new fromAction.RegisterFail(error)))
      );
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(fromAction.LOGOUT),
    switchMap(() => {
      return this.authService.logout().pipe(
        map(() => new fromAction.LogoutSuccess()),
        catchError(error => of(new fromAction.LogoutFail(error)))
      );
    })
  );

  @Effect()
  search$ = this.actions$.pipe(
    ofType(fromAction.SEARCH),
    map((action: fromAction.Search) => action.payload),
    switchMap((data) => {
      return this.authService.searchPerson(data).pipe(
        map((response) => new fromAction.SearchSuccess(response.users)),
        catchError(error => of(new fromAction.SearchFail(error)))
      );
    })
  );
}
