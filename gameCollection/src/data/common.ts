import { IAllGamesResponse } from "./AllGame";
import { IGenreResult } from "./genre";
import { IPlatforms } from "./platform";

export interface IFetchResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
  previous?: string | null;
}

export type TSelectedGenre = IGenreResult | null;
export type TSelectedPlatform = IPlatforms | null;

export interface IQueryObject {
  genreId?: number;
  platformId?: number;
  order?: string;
  search?: string;
}

export interface IBaseResponse {
  pageParams: any[];
  pages: IAllGamesResponse;
}
