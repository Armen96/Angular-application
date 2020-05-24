import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromAction from '../actions/admin.action';
import {AuthService} from '../../../services';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminEffect {
  constructor(
    private actions$: Actions,
    protected authService: AuthService
  ) {}

  @Effect()
  adminUserList$ = this.actions$.pipe(
    ofType(fromAction.ADMIN_USER_LIST),
    switchMap(() => {
      return this.authService.getUserList().pipe(
        map(response => new fromAction.AdminUserListSuccess(response)),
        catchError(error => of(new fromAction.AdminUserListFail(error)))
      );
    })
  );
}
