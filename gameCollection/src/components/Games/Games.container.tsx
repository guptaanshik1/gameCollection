import GamesView from "./Games.view";
import { GamesContext } from "./utils/context";
import useAllGamesData from "../../hooks/useAllGamesData";
import { IQueryObject } from "../../data/common";

interface IProps {
  queryObject: IQueryObject;
}

export default function GamesContainer({ queryObject }: IProps) {
  const { data: games, error, isLoading } = useAllGamesData(queryObject);

  return (
    <GamesContext.Provider value={{ games, error, isLoading }}>
      <GamesView />
    </GamesContext.Provider>
  );
}
