import { IAllGameResult } from "../../../data/AllGame";
import { TSelectedGenre } from "../../../data/common";

export interface IGameContextData {
  games: IAllGameResult[];
  error: string;
  isLoading: boolean;
  selectedGenre?: TSelectedGenre;
}
