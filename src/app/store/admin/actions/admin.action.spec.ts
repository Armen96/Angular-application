import * as fromAction from './admin.action';

describe('Admin Action', () => {

  describe('AdminUserList', () => {
    it('should work', () => {
      const action = new fromAction.AdminUserList();

      expect({...action}).toEqual({
        type: fromAction.ADMIN_USER_LIST
      });
    });
  });

  describe('AdminUserListSuccess', () => {
    it('should work', () => {
      const action = new fromAction.AdminUserListSuccess([]);

      expect({...action}).toEqual({
        type: fromAction.ADMIN_USER_LIST_SUCCESS,
        payload: []
      });
    });
  });

  describe('AdminUserListFail', () => {
    it('should work', () => {
      const action = new fromAction.AdminUserListFail(null);

      expect({...action}).toEqual({
        type: fromAction.ADMIN_USER_LIST_FAIL,
        payload: null
      });
    });
  });
});
