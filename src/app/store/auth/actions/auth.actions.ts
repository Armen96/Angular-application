import { Action } from '@ngrx/store';
import {PayloadAction} from '../../../shared/ngrx/payload-action';
import {UsersInterface} from '../../../interfaces/auth/users.interface';
import {SearchPersonInterface} from '../../../interfaces/auth/search.person.interface';

export const LOGIN = '[Auth] LOGIN';
export const LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[Auth] LOGIN_ERROR';

export const LOGOUT = '[Auth] LOGOUT';
export const LOGOUT_SUCCESS = '[Auth] LOGOUT_SUCCESS';
export const LOGOUT_FAIL = '[Auth] LOGOUT_FAIL';

export const REGISTER = '[Auth] REGISTER';
export const REGISTER_SUCCESS = '[Auth] REGISTER_SUCCESS';
export const REGISTER_FAIL = '[Auth] REGISTER_FAIL';

export const SEARCH = '[Auth] SEARCH';
export const SEARCH_SUCCESS = '[Auth] SEARCH_SUCCESS';
export const SEARCH_FAIL = '[Auth] SEARCH_FAIL';

export class Login extends PayloadAction<UsersInterface> {
  readonly type = LOGIN;
}

export class LoginSuccess extends PayloadAction<any> {
  readonly type = LOGIN_SUCCESS;
}

export class LoginFail extends PayloadAction<any> {
  readonly type = LOGIN_FAIL;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class LogoutFail extends PayloadAction<any> {
  readonly type = LOGOUT_FAIL;
}

export class Register extends PayloadAction<any> {
  readonly type = REGISTER;
}

export class RegisterSuccess extends PayloadAction<UsersInterface> {
  readonly type = REGISTER_SUCCESS;
}

export class RegisterFail extends PayloadAction<any> {
  readonly type = REGISTER_FAIL;
}

export class Search extends PayloadAction<SearchPersonInterface> {
  readonly type = SEARCH;
}

export class SearchSuccess extends PayloadAction<UsersInterface[]> {
  readonly type = SEARCH_SUCCESS;
}

export class SearchFail extends PayloadAction<any> {
  readonly type = SEARCH_FAIL;
}

export type AuthAction =
  | Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LogoutSuccess
  | LogoutFail
  | Register
  | RegisterSuccess
  | RegisterFail
  | Search
  | SearchSuccess
  | SearchFail;
