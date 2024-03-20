import CustomSpinner from "../../../components/CustomSpinner";
import { useGameDetailsPageContext } from "../utils/context";

const GameTrailer = () => {
  const { gameTrailerData, gameTrailerError, isGameTrailerLoading } =
    useGameDetailsPageContext();

  if (isGameTrailerLoading) return <CustomSpinner />;
  if (gameTrailerError) return null;

  return (
    <video
      src={gameTrailerData?.results?.[0]?.data?.[480]}
      poster={gameTrailerData?.results?.[0]?.preview}
      controls
    />
  );
};

export default GameTrailer;
