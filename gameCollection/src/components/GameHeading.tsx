import { Heading } from "@chakra-ui/react";
import { IQueryObject } from "../data/common";

interface IProps {
  queryObject: IQueryObject;
}

const GameHeading = ({ queryObject }: IProps) => {
  return (
    <Heading as={"h1"}>
      {`${queryObject?.platform?.name || ""} ${
        queryObject?.genre?.name || ""
      } Games`}
    </Heading>
  );
};

export default GameHeading;
