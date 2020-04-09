import {getActions, TestActions} from '../../../../test-utils/test-actions';
import {AuthService} from '../../../services';
import {AuthEffects} from './auth.effects';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Actions} from '@ngrx/effects';
import {of} from 'rxjs';
import * as fromAction from '../actions/auth.actions';
import {cold, hot} from 'jasmine-marbles';
import {configureTestSuite} from 'ng-bullet';

describe('Auth Effect', () => {
  let actions$: TestActions;
  let service: AuthService;
  let effect: AuthEffects;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        AuthEffects,
        { provide: Actions, useFactory: getActions }]
    });
  });

  beforeEach(() => {
    actions$ = TestBed.get(Actions);
    service = TestBed.get(AuthService);
    effect = TestBed.get(AuthEffects);

    spyOn(service, 'login').and.returnValue(of(null));
  });

  describe('login$', () => {
    it('should work', () => {
      const responseResult = null;
      const action = new fromAction.Login({email: 'test@gmail.com', password: '123456'});
      const completion = new fromAction.LoginSuccess(responseResult);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });
      expect(effect.login$).toBeObservable(expected);
    });
  });
});
