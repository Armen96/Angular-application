import {getActions, TestActions} from '../../../../test-utils/test-actions';
import {RecordsService} from '../../../services';
import {RecordEffects} from './record.effects';
import {configureTestSuite} from 'ng-bullet';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Actions} from '@ngrx/effects';
import {of} from 'rxjs';
import * as fromActions from '../actions';
import {cold, hot} from 'jasmine-marbles';

describe('RecordEffect', () => {
  let actions$: TestActions;
  let service: RecordsService;
  let effects: RecordEffects;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RecordsService,
        RecordEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });
  });

  beforeEach(() => {
    actions$ = TestBed.get(Actions);
    service = TestBed.get(RecordsService);
    effects = TestBed.get(RecordEffects);

    spyOn(service, 'getRecords').and.returnValue(of([]));
    spyOn(service, 'createRecord').and.returnValue(of(null));
  });

  describe('loadRecords$', () => {
    it('should work', () => {
      const successData = [];
      const action = new fromActions.LoadRecords();
      const completion = new fromActions.LoadRecordsSuccess(successData);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });
      expect(effects.loadRecords$).toBeObservable(expected);
    });
  });

  describe('createRecord$', () => {
    it('should work', () => {
      const action = new fromActions.CreateRecord(null);
      const completion = new fromActions.CreateRecordSuccess(null);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });
      expect(effects.createRecord$).toBeObservable(expected);
    });
  });
});
