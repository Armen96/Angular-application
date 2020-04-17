import {UsersInterface} from '../../../interfaces/users.interface';
import * as fromAction from '../actions/admin.action';
import {HttpErrorResponse} from '@angular/common/http';

export interface AdminStateInterface {
  users: UsersInterface[];
  isLoaded: boolean;
  isLoading: boolean;
  error?: HttpErrorResponse;
}

export const initialState: AdminStateInterface = {
  users: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export function adminReducer(state = initialState, actions: fromAction.AdminAction): AdminStateInterface {
  switch (actions.type) {
    case fromAction.ADMIN_USER_LIST: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    }

    case fromAction.ADMIN_USER_LIST_SUCCESS: {
      const users = actions.payload;
      return {
        ...state,
        users,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromAction.ADMIN_USER_LIST_FAIL: {
      const error = actions.payload;
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        error
      };
    }

    default: {
      return state;
    }
  }
}
