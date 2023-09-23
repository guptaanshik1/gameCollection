import { InfiniteData } from "@tanstack/react-query";
import { IAllGamesResponse } from "../../../data/AllGame";
import { TSelectedGenre } from "../../../data/common";

export interface IGameContextData {
  gamesData?: InfiniteData<IAllGamesResponse | undefined> | undefined;
  games: InfiniteData<IAllGamesResponse | undefined> | undefined;
  error: Error | null;
  isLoading: boolean;
  selectedGenre?: TSelectedGenre;
  fetchNextPage?: () => void;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
}
