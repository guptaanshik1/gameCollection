import GamesView from "./Games.view";
import { GamesContext } from "./utils/context";
import useAllGamesData from "../../hooks/useAllGamesData";

export default function GamesContainer() {
  const { games, error, isLoading } = useAllGamesData();

  return (
    <GamesContext.Provider value={{ games, error, isLoading }}>
      <GamesView />
    </GamesContext.Provider>
  );
}
