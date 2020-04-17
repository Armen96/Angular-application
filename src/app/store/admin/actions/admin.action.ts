import { Action } from '@ngrx/store';
import {PayloadAction} from '../../../shared/ngrx/payload-action';
import {UsersInterface} from '../../../interfaces/users.interface';

export const ADMIN_USER_LIST = '[Admin] ADMIN_USER_LIST';
export const ADMIN_USER_LIST_SUCCESS = '[Admin] ADMIN_USER_LIST_SUCCESS';
export const ADMIN_USER_LIST_FAIL = '[Admin] ADMIN_USER_LIST_FAIL';

export class AdminUserList implements Action {
  readonly type = ADMIN_USER_LIST;
}

export class AdminUserListSuccess extends PayloadAction<UsersInterface[]> {
  readonly type = ADMIN_USER_LIST_SUCCESS;
}

export class AdminUserListFail extends PayloadAction<any> {
  readonly type = ADMIN_USER_LIST_FAIL;
}

export type AdminAction = AdminUserList
  | AdminUserListSuccess
  | AdminUserListFail;
