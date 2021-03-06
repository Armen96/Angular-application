import * as fromActions from '../actions/auth.actions';
import {HttpErrorResponse} from '@angular/common/http';
import {UsersInterface} from '../../../interfaces/users.interface';
import {environment} from '../../../../environments/environment';

export interface State {
  user: UsersInterface;
  token: string;
  friends: any;
  messages: any;
  usersList: UsersInterface[];
  isLoading: boolean;
  isLoaded: boolean;
  error?: HttpErrorResponse;
}

export const initialState: State = {
  user: null,
  token: '',
  friends: null,
  messages: null,
  usersList: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export function authReducer(state = initialState, action: fromActions.AuthAction): State {
  switch (action.type) {

    case fromActions.LOGIN:
    case fromActions.REGISTER:
    case fromActions.LOGOUT:
    case fromActions.SEARCH: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        error: null
      };
    }

    case fromActions.LOGIN_SUCCESS:
    case fromActions.REGISTER_SUCCESS: {
      const data = action.payload;
      localStorage.setItem(environment.AUTH.TOKEN_HEADER_NAME, data.token);
      localStorage.setItem(environment.AUTH.USER, JSON.stringify(data.user));

      return {
        ...state,
        user: data.user,
        token: data.token,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        user: null,
        token: '',
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.SEARCH_SUCCESS: {
      const usersList = action.payload;

      return {
        ...state,
        usersList,
        isLoading: false,
        isLoaded: true
      };
    }

    case fromActions.LOGIN_FAIL:
    case fromActions.REGISTER_FAIL:
    case fromActions.LOGOUT_FAIL:
    case fromActions.SEARCH_FAIL: {
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
