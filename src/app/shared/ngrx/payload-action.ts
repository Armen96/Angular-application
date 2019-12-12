import { Action } from '@ngrx/store';

export abstract class PayloadAction<T> implements Action {

  type: string;

  public constructor(public payload: T) {}
}
