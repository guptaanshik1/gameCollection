import { useGamesContext } from "./utils/context";
import GameCard from "./components/GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardContainer from "./components/GameCardContainer";
import GameCardSkeleton from "./components/GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomSpinner from "../CustomSpinner";

export default function GamesView() {
  const {
    games: allGames,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGamesContext();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const games = allGames?.pages?.flatMap((page) => page?.results);
  const gamesCount =
    allGames?.pages?.reduce((acc, page) => {
      if (page?.results) {
        return acc + page?.results.length;
      } else {
        return acc;
      }
    }, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={gamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage?.()}
      loader={<CustomSpinner />}
    >
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
    </InfiniteScroll>
  );
}
