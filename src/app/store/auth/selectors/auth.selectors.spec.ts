import {configureTestSuite} from 'ng-bullet';
import {TestBed} from '@angular/core/testing';
import {select, Store, StoreModule} from '@ngrx/store';
import * as fromReducer from '../reducers/auth.reducers';
// import * as fromAction from '../actions/auth.actions';
import * as fromSelector from './auth.selectors';
import {AppState} from '../../../shared/ngrx/appState';
import {take} from 'rxjs/operators';

describe('Auth Selector', () => {
  let store: Store<AppState>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: fromReducer.authReducer
        })
      ]
    });
  });

  beforeEach(() => {
    store = TestBed.get(Store);
  });

  describe('getAuthState', () => {
    it('should return correct state', () => {
      let result;
      store.pipe(select(fromSelector.authFeatureSelector), take(1)).subscribe(value => (result = value));

      expect(result).toEqual({ ...fromReducer.initialState });
    });
  });

  // describe('getUser', () => {
  //   it('should return correct state', () => {
  //     let result;
  //     store.dispatch(new fromAction.LogoutSuccess());
  //
  //     store.pipe(select(fromSelector.getUser), take(2)).subscribe(value => result = value);
  //     expect(result).toEqual(null);
  //     store.dispatch(new fromAction.LoginSuccess({user: {name: 'Armen', _id: 'asd5a4d5a', email: 'asda@gmail.com'}, token: ''}));
  //     expect(result.name).toEqual('Armen');
  //     expect(result.email).toEqual('asda@gmail.com');
  //   });
  // });
});
