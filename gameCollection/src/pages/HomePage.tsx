import { Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import { Games } from "../components/Games";
import GenreList from "../components/Genres/GenreList";
import PlatformList from "../components/Platforms/PlatformList";
import SortList from "../components/SortOrder/SortList";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      p={"10px 16px"}
    >
      <Show above="lg">
        <GridItem area="aside" p={"10px"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" p={"10px"}>
        <GameHeading />
        <Flex my={"10px"} gridGap={"20px"}>
          <PlatformList />
          <SortList />
        </Flex>
        <Games />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
