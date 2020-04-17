import {getActions, TestActions} from '../../../../test-utils/test-actions';
import {AuthService} from '../../../services';
import {configureTestSuite} from 'ng-bullet';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Actions} from '@ngrx/effects';
import {of} from 'rxjs';
import {AdminEffect} from './admin.effect';
import * as fromAction from '../../admin/actions/admin.action';
import {cold, hot} from 'jasmine-marbles';

describe('Admin Effect', () => {
  let actions$: TestActions;
  let service: AuthService;
  let effect: AdminEffect;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        AdminEffect,
        { provide: Actions, useFactory: getActions }]
    });
  });

  beforeEach(() => {
    actions$ = TestBed.get(Actions);
    service = TestBed.get(AuthService);
    effect = TestBed.get(AdminEffect);

    spyOn(service, 'getUserList').and.returnValue(of([]));
  });

  describe('adminUserList$', () => {
    it('should work', () => {
      const responseResult = [];
      const action = new fromAction.AdminUserList();
      const completion = new fromAction.AdminUserListSuccess(responseResult);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });
      expect(effect.adminUserList$).toBeObservable(expected);
    });
  });
});
