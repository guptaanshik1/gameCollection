import GamesView from "./Games.view";
import { GamesContext } from "./utils/context";
import useAllGamesData from "../../hooks/useAllGamesData";
import { TSelectedGenre } from "../../data/common";

interface IProps {
  selectedGenre: TSelectedGenre;
}

export default function GamesContainer({ selectedGenre }: IProps) {
  const { data: games, error, isLoading } = useAllGamesData(selectedGenre);

  return (
    <GamesContext.Provider value={{ games, error, isLoading }}>
      <GamesView />
    </GamesContext.Provider>
  );
}
