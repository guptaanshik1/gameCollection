import { Heading } from "@chakra-ui/react";
import { IQueryObject } from "../data/common";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface IProps {
  queryObject: IQueryObject;
}

const GameHeading = ({ queryObject }: IProps) => {
  const genre = useGenre(queryObject?.genreId);
  const platform = usePlatform(queryObject?.platformId);

  return (
    <Heading as={"h1"}>
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
