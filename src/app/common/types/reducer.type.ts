import { AnyAction } from 'redux';

export interface IReducerAction {
  type: AnyAction;
  payload: unknown;
}

export interface IReducerState {
  [key: string]: unknown;
}

export default interface IReducer<T> {
  (state: T, action: AnyAction): T & IReducerState;
}
