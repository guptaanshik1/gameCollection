import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useQueryStore from "../app/useQueryStore";

const GameHeading = () => {
  const [genreId, platformId] = useQueryStore((state) => [
    state.queryObject.genreId,
    state.queryObject.platformId,
  ]);
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  return (
    <Heading as={"h1"}>
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
