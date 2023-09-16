import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

const AppLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="red" area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="orange" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green" area="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
