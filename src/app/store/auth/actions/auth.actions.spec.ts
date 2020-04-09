import * as fromAction from './auth.actions';

describe('Auth Actions', () => {
 describe('LoginAction', () => {
   it('should work', () => {
     const action = new fromAction.Login(null);

     expect({ ...action }).toEqual({
       type: fromAction.LOGIN,
       payload: null
     });
   });
 });

 describe('LoginSuccess', () => {
   it('should work', () => {
     const action = new fromAction.LoginSuccess(null);

     expect({...action}).toEqual({
       type: fromAction.LOGIN_SUCCESS,
       payload: null
     });
   });
 });
});
