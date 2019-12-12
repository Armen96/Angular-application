import {RecordsInterface} from '../../interfaces/records.interface';
import * as fromActions from '../action/record.actions';
import {HttpErrorResponse} from '@angular/common/http';

export interface State {
  records: RecordsInterface[];
  isLoading: boolean;
  isLoaded: boolean;
  error?: HttpErrorResponse;
}

export const initialState: State = {
  records: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export function reducer(state = initialState, action: fromActions.RecordActions): State {
  switch (action.type) {

    case fromActions.LOAD_RECORDS: {
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

    case fromActions.LOAD_RECORDS_FAIL: {
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


export const getRecords = (state: State) => state.records;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoaded = (state: State) => state.isLoaded;
