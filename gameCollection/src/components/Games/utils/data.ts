import { IAllGameResult, IAllGamesResponse } from "../../../data/AllGame";
import { IFetchResponse, TSelectedGenre } from "../../../data/common";

export interface IGameContextData {
  gamesData: IFetchResponse<IAllGamesResponse> | undefined;
  games: IAllGameResult[] | undefined;
  error: Error | null;
  isLoading: boolean;
  selectedGenre?: TSelectedGenre;
}
