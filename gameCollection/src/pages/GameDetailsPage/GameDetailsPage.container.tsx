import { useParams } from "react-router-dom";
import GameDetailsPageView from "./GameDetailsPage.view";
import { GameDetailsPageContext } from "./utils/context";
import useGetGameDetail from "./hooks/useGetGameDetail";
import useGetGameTrailers from "./hooks/useGetGameTrailers";

export default function GameDetailsPageContainer() {
  const { slug } = useParams<{ slug: string }>();

  const {
    data: gameData,
    isLoading: isGameDetailLoading,
    error,
  } = useGetGameDetail(slug);

  if (error || !gameData) throw error;

  const {
    data: gameTrailerData,
    isLoading: isGameTrailerLoading,
    error: gameTrailerError,
  } = useGetGameTrailers(gameData?.id);

  return (
    <GameDetailsPageContext.Provider
      value={{
        isGameDetailLoading,
        gameData,
        gameTrailerData,
        isGameTrailerLoading,
        gameTrailerError,
      }}
    >
      <GameDetailsPageView />
    </GameDetailsPageContext.Provider>
  );
}
