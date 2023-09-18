export interface IFetchResponse<T> {
  count: number;
  results: T[];
  next?: string;
  previous?: string;
}
