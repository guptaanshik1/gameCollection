import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { Games } from "../Games";
import GenreList from "../Genres/GenreList";
import { useState } from "react";
import { TSelectedGenre } from "../../data/common";

const AppLayout = () => {
  const [selectedGenre, setSelectedGenre] = useState<TSelectedGenre>(null);

  const onSelectedGenre = (genre: TSelectedGenre) => {
    setSelectedGenre(genre);
  };

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
          <GenreList
            onSelectedGenre={onSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" p={"10px"}>
        <Games selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
