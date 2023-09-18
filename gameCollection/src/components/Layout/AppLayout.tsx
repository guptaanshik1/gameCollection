import { Grid, GridItem, Flex, Show } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { Games } from "../Games";
import GenreList from "../Genres/GenreList";
import { useState } from "react";
import { IQueryObject } from "../../data/common";
import PlatformList from "../Platforms/PlatformList";
import SortList from "../SortOrder/SortList";

const AppLayout = () => {
  const [queryObject, setQueryObject] = useState<IQueryObject>(
    {} as IQueryObject
  );

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
            onSelectedGenre={(genre) =>
              setQueryObject({ ...queryObject, genre })
            }
            selectedGenre={queryObject?.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" p={"10px"}>
        <Flex my={"10px"} gridGap={"20px"}>
          <PlatformList
            platform={queryObject?.platform}
            onSelectedPlatform={(platform) =>
              setQueryObject({ ...queryObject, platform })
            }
          />
          <SortList
            onSelectSortOrder={(order) =>
              setQueryObject({ ...queryObject, order })
            }
            sortOrder={queryObject?.order}
          />
        </Flex>
        <Games queryObject={queryObject} />
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
