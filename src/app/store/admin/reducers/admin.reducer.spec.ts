import * as fromReducer from '../../admin/reducers/admin.reducer';
import * as fromAction from '../../admin/actions/admin.action';

describe('Admin Reducer', () => {
  const error = {error: 'Error message'};

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {} as any;
      const state = fromReducer.adminReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('ADMIN_USER_LIST', () => {
    it('should work', () => {
      const { initialState } = fromReducer;

      const action = new fromAction.AdminUserList();
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.isLoading).toEqual(true);
      expect(state.isLoaded).toEqual(false);
      expect(state.error).toEqual(null);
    });
  });

  describe('ADMIN_USER_LIST_SUCCESS', () => {
    it('should work', () => {
      const { initialState } = fromReducer;

      const action = new fromAction.AdminUserListSuccess([]);
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.users).toEqual([]);
      expect(state.isLoading).toEqual(false);
      expect(state.isLoaded).toEqual(true);
      expect(state.error).toEqual(null);
    });
  });

  describe('ADMIN_USER_FAIL', () => {
    it('should work', () => {
      const { initialState } = fromReducer;

      const action = new fromAction.AdminUserListFail(error);
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.error.error).toEqual('Error message');
    });
  });
});
