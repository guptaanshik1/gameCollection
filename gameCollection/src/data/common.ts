import { IGenreResult } from "./genre";
import { IPlatforms } from "./platform";

export interface IFetchResponse<T> {
  count: number;
  results: T[];
  next?: string;
  previous?: string;
}

export type TSelectedGenre = IGenreResult | null;
export type TSelectedPlatform = IPlatforms | null;

export interface IQueryObject {
  genre: TSelectedGenre;
  platform: TSelectedPlatform;
  order: string;
  search: string;
}
