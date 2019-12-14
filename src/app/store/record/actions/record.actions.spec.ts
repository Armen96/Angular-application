import * as fromActions from './record.actions';

describe('Record actions test', () => {
  describe('LoadRecords', () => {
    it('should work', () => {
      const action = new fromActions.LoadRecords();

      expect({ ...action }).toEqual({
        type: fromActions.LOAD_RECORDS
      });
    });
  });

  describe('LoadRecordsSuccess', () => {
    it('should work', () => {
      const action = new fromActions.LoadRecordsSuccess([]);

      expect({ ...action }).toEqual({
        type: fromActions.LOAD_RECORDS_SUCCESS,
        payload: []
      });
    });
  });

  describe('LoadRecordsFail', () => {
    it('should work', () => {
      const action = new fromActions.LoadRecordsFail(null);

      expect({ ...action }).toEqual({
        type: fromActions.LOAD_RECORDS_FAIL,
        payload: null
      });
    });
  });

  describe('CreateRecord', () => {
    it('should work', () => {
      const action = new fromActions.CreateRecord(null);

      expect({...action}).toEqual({
        type: fromActions.CREATE_RECORD,
        payload: null
      });
    });
  });

  describe('CreateRecordSuccess', () => {
    it('should work', () => {
      const action = new fromActions.CreateRecordSuccess(null);

      expect({...action}).toEqual({
        type: fromActions.CREATE_RECORD_SUCCESS,
        payload: null
      });
    });
  });

  describe('CreateRecordFail', () => {
    it('should work', () => {
      const action = new fromActions.CreateRecordFail(null);

      expect({...action}).toEqual({
        type: fromActions.CREATE_RECORD_FAIL,
        payload: null
      });
    });
  });
});
