import { useParams } from "react-router-dom";
import GameDetailsPageView from "./GameDetailsPage.view";
import { GameDetailsPageContext } from "./utils/context";
import useGetGameDetail from "./hooks/useGetGameDetail";

export default function GameDetailsPageContainer() {
  const { slug } = useParams<{ slug: string }>();

  const {
    data: gameData,
    isLoading: isGameDetailLoading,
    error,
  } = useGetGameDetail(slug);

  if (error) throw error;

  return (
    <GameDetailsPageContext.Provider value={{ isGameDetailLoading, gameData }}>
      <GameDetailsPageView />
    </GameDetailsPageContext.Provider>
  );
}
