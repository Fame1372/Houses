export interface IActionParams {
  [key: string]: unknown;
}
export default interface IAction {
  (params: IActionParams | any): { type: string; payload: unknown };
}
