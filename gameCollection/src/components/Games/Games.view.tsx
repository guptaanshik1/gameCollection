import { useGamesContext } from "./utils/context";
import GameCard from "./components/GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardContainer from "./components/GameCardContainer";
import GameCardSkeleton from "./components/GameCardSkeleton";

export default function GamesView() {
  const { games, isLoading } = useGamesContext();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.map((game) => (
          <GameCardContainer key={game?.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
