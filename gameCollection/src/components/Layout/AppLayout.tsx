import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { Games } from "../Games";

const AppLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      p={"10px 16px"}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <Games />
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
