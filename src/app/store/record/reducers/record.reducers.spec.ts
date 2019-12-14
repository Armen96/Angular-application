import * as fromActions from '../actions/record.actions';
import * as fromReducer from './record.reducers';

describe('Record Reducer Test', () => {
  const error = { error: 'any' };
  describe('testing undefined action', () => {
    it('should return the default state', () => {
      const {initialState} = fromReducer;
      const action: any = {};
      const state = fromReducer.recordReducer(undefined, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('LOAD_RECORDS', () => {
    it('should set the correct states', () => {
      const {initialState} = fromReducer;
      const action: any = new fromActions.LoadRecords();
      const state = fromReducer.recordReducer(initialState, action);

      expect(state.isLoading).toEqual(true);
      expect(state.isLoaded).toEqual(false);
      expect(state.error).toEqual(null);
    });
  });

  describe('LOAD_RECORDS_SUCCESS', () => {
    it('should set the correct states', () => {
      const {initialState} = fromReducer;
      const payload = {id: 9999, body: 'test', title: 'test', userId: 1};
      initialState.records = [payload];

      const action: any = new fromActions.LoadRecordsSuccess([payload]);
      const state = fromReducer.recordReducer(initialState, action);

      expect(state.records[0].id).toEqual(9999);
      expect(state.isLoading).toEqual(false);
      expect(state.isLoaded).toEqual(true);
      expect(state.error).toEqual(null);
    });
  });

  describe('LOAD_RECORDS_FAIL', () => {
    it('should set the correct states', () => {
      const {initialState} = fromReducer;

      const action: any = new fromActions.LoadRecordsFail(error);
      const state = fromReducer.recordReducer(initialState, action);

      expect(state.isLoading).toEqual(false);
      expect(state.isLoaded).toEqual(false);
      expect(state.error.error).toEqual('any');
    });
  });
});
