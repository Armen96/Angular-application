import {RecordsInterface} from '../../../interfaces/record/records.interface';
import * as fromActions from '../actions/record.actions';
import {HttpErrorResponse} from '@angular/common/http';

export interface State {
  records: RecordsInterface[];
  selected: RecordsInterface;
  isLoading: boolean;
  isLoaded: boolean;
  error?: HttpErrorResponse;
}

export const initialState: State = {
  records: [],
  selected: null,
  isLoading: false,
  isLoaded: false,
  error: null
};

export function recordReducer(state = initialState, action: fromActions.RecordActions): State {
  switch (action.type) {

    case fromActions.LOAD_RECORDS:
    case fromActions.CREATE_RECORD:
    case fromActions.UPDATE_RECORD:
    case fromActions.DELETE_RECORD:
    case fromActions.LOAD_RECORD_BY_ID: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    }

    case fromActions.LOAD_RECORDS_SUCCESS: {
      const records = action.payload;
      return {
        ...state,
        records,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.CREATE_RECORD_SUCCESS: {
      const record = action.payload;
      const records = [...state.records, record];
      return {
        ...state,
        records,
        selected: record,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.DELETE_RECORD_SUCCESS: {
      const recordId = action.payload;
      const records = state.records;
      const result = records.filter((item) => {
        return item['_id'] !== recordId;
      });

      return {
        ...state,
        records: result,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.UPDATE_RECORD_SUCCESS: {
      const record = action.payload;
      const records = state.records;
      records.filter((item) => {
        // if (item.id === record.id) {
        //   item.body = record.body;
        //   item.title = record.title;
        // }
      });

      return {
        ...state,
        records,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.LOAD_RECORD_BY_ID_SUCCESS: {
      const selected = action.payload;
      return {
        ...state,
        selected,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.LOAD_RECORDS_FAIL:
    case fromActions.CREATE_RECORD_FAIL:
    case fromActions.DELETE_RECORD_FAIL:
    case fromActions.UPDATE_RECORD_FAIL:
    case fromActions.LOAD_RECORD_BY_ID_FAIL: {
      const error = action.payload;
      return {
        ...state,
        error,
        isLoading: false,
        isLoaded: false
      };
    }

    default:
      return state;
  }
}
