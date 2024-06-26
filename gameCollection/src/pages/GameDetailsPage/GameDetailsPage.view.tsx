import { Flex, Heading } from "@chakra-ui/react";
import { useGameDetailsPageContext } from "./utils/context";
import CustomSpinner from "../../components/CustomSpinner";
import ExpandableText from "../../components/ExpandableText";
import GameAttributes from "./components/GameAttributes";
import GameTrailer from "./components/GameTrailer";
import GameScreenshots from "./components/GameScreenshots";

export default function GameDetailsPageView() {
  const { isGameDetailLoading, gameData } = useGameDetailsPageContext();
  if (isGameDetailLoading) return <CustomSpinner />;

  return (
    <Flex mb={"200px"} flexDir={"column"}>
      <Heading>{gameData?.name}</Heading>
      <ExpandableText children={gameData?.description_raw} />
      <GameAttributes />
      <GameScreenshots />
      <GameTrailer />
    </Flex>
  );
}
