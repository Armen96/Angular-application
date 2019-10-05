import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appAction';

const initalState = {
  login: false
};

export function appReducer(state = initalState, action) {
  switch (action) {
    case ACTION_LOGOUT:
      return {
        ...state,
        login: false
      };

    case ACTION_LOGIN:
      return {
        ...state,
        login: true
      };

    default:
      return {
        ...state
      }
  }
}
