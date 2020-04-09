import * as fromAction from '../actions/auth.actions';
import * as fromReducer from './auth.reducers';

describe('Auth Reducers', () => {
  const error = {error: 'Error message'};

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {} as any;
      const state = fromReducer.authReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOGIN_REDUCER', () => {
   it('should work', () => {
     const { initialState } = fromReducer;

     const action = new fromAction.Login(null);
     const state = fromReducer.authReducer(initialState, action);

     expect(state.isLoading).toEqual(true);
     expect(state.isLoaded).toEqual(false);
     expect(state.error).toEqual(null);
   });
  });

  describe('LOGIN_SUCcESS_REDUCER', () => {
    it('should work', () => {
      const { initialState } = fromReducer;
      const action = new fromAction.LoginSuccess({
        user: null,
        token: ''
      });

      const state = fromReducer.authReducer(initialState, action);

      expect(state.user).toEqual(null);
      expect(state.token).toEqual('');

      expect(state.isLoading).toEqual(false);
      expect(state.isLoaded).toEqual(true);
      expect(state.error).toEqual(null);
    });
  });

  describe('LOGIN_FAIL_REDUCER', () => {
    it('should work', () => {
      const { initialState } = fromReducer;
      const action = new fromAction.LogoutFail(error);
      const state = fromReducer.authReducer(initialState, action);

      expect(state.error.error).toEqual('Error message');
    });
  });
});
