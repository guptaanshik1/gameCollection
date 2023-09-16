import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../Navbar";

const AppLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="orange">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
