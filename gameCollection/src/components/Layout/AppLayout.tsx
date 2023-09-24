import { Grid, GridItem, Flex, Show } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { Games } from "../Games";
import GenreList from "../Genres/GenreList";
import PlatformList from "../Platforms/PlatformList";
import SortList from "../SortOrder/SortList";
import GameHeading from "../GameHeading";

const AppLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      p={"10px 16px"}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
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

export default AppLayout;
