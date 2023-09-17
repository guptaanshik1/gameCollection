import { useGamesContext } from "./utils/context";
import GameCard from "./components/GameCard";
import { IAllGameResult } from "../../data/AllGame";
import { SimpleGrid } from "@chakra-ui/react";

export default function GamesView() {
  const { games, error } = useGamesContext();

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} p={"10px"} spacing={5}>
        {games?.map((game: IAllGameResult) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
