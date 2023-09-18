import { IAllGameResult } from "../../../data/AllGame";
import { TSelectedGenre } from "../../../data/common";
import { IGenreResult } from "../../../data/genre";

export interface IGameContextData {
  games: IAllGameResult[];
  error: string;
  isLoading: boolean;
  selectedGenre?: TSelectedGenre;
}
