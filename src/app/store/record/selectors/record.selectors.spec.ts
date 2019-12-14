import { TestBed } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { configureTestSuite } from 'ng-bullet';
import { take } from 'rxjs/operators';
import * as fromAction from '../actions/record.actions';
import { initialState, recordReducer } from '../reducers';
import * as fromSelector from './record.selectors';
import {AppState} from '../../../shared/ngrx/appState';

describe('Records Selectors', () => {
  let store: Store<AppState>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          records: recordReducer
        })
      ]
    });
  });

  beforeEach(() => {
    store = TestBed.get(Store);
  });

  describe('recordsFeatureSelector', () => {
    it('should return correct state', () => {
      let result;
      store.pipe(select(fromSelector.recordsFeatureSelector), take(1)).subscribe(value => (result = value));

      expect(result).toEqual({...initialState});
    });
  });

  describe('getRecords', () => {
    it('should return correct state', () => {
      let result;
      store.pipe(select(fromSelector.getRecords), take(2)).subscribe(value => (result = value));

      store.dispatch(new fromAction.LoadRecordsSuccess([{id: 99999, body: 'abc', title: 'cba', userId: 1}]));
      expect(result).toEqual([{id: 99999, body: 'abc', title: 'cba', userId: 1}]);
    });
  });

  describe('getRecordsLoading', () => {
    it('should return correct state', () => {
      let result;
      store.pipe(select(fromSelector.getRecordsIsLoading), take(2)).subscribe(value => (result = value));

      expect(result).toEqual(false);
      store.dispatch(new fromAction.LoadRecords());
      expect(result).toEqual(true);
    });
  });

  describe('getRecordsIsLoaded', () => {
    it('should return correct state', () => {
      let result;
      store.pipe(select(fromSelector.getRecordsIsLoaded), take(2)).subscribe(value => (result = value));

      expect(result).toEqual(false);
      store.dispatch(new fromAction.LoadRecordsSuccess([{id: 99999, body: 'abc', title: 'cba', userId: 1}]));
      expect(result).toEqual(true);
    });
  });
});
