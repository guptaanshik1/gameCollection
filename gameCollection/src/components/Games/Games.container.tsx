import GamesView from "./Games.view";
import { GamesContext } from "./utils/context";
import useAllGamesData from "../../hooks/useAllGamesData";

export default function GamesContainer() {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useAllGamesData();

  return (
    <GamesContext.Provider
      value={{
        games,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
      }}
    >
      <GamesView />
    </GamesContext.Provider>
  );
}
