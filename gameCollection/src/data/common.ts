import { IGenreResult } from "./genre";

export interface IFetchResponse<T> {
  count: number;
  results: T[];
  next?: string;
  previous?: string;
}

export type TSelectedGenre = IGenreResult | null;
