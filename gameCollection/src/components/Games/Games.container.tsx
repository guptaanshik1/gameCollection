import GamesView from "./Games.view";
import { GamesContext } from "./utils/context";
import useAllGamesData from "../../hooks/useAllGamesData";
import { IQueryObject } from "../../data/common";
import { IAllGameResult } from "../../data/AllGame";

interface IProps {
  queryObject: IQueryObject;
}

export default function GamesContainer({ queryObject }: IProps) {
  const { data: gamesData, error, isLoading } = useAllGamesData(queryObject);
  const games = gamesData?.results as any as Array<IAllGameResult>;

  return (
    <GamesContext.Provider value={{ gamesData, games, error, isLoading }}>
      <GamesView />
    </GamesContext.Provider>
  );
}
