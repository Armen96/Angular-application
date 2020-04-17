import {configureTestSuite} from 'ng-bullet';
import {TestBed} from '@angular/core/testing';
import {select, Store, StoreModule} from '@ngrx/store';
import * as fromReducer from '../reducers/admin.reducer';
// import * as fromAction from '../actions/admin.action';
import * as fromSelector from './admin.selector';
import {AppState} from '../../../shared/ngrx/appState';
import {take} from 'rxjs/operators';

describe('Admin Selector', () => {
  let store: Store<AppState>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          admin: fromReducer.adminReducer
        })
      ]
    });
  });

  beforeEach(() => {
    store = TestBed.get(Store);
  });

  describe('getAdminState', () => {
    it('should return correct state', () => {
      let result;
      store.pipe(select(fromSelector.adminFeatureSelector), take(1)).subscribe(value => (result = value));

      expect(result).toEqual({ ...fromReducer.initialState });
    });
  });

  // describe('getUserList', () => {
  //   it('should return correct state', () => {
  //     let result;
  //     store.dispatch(new fromAction.AdminUserList());
  //     store.pipe(select(fromSelector.getUserList), take(2)).subscribe(value => result = value);
  //
  //     expect(result).toEqual([]);
  //   });
  // });
});
