import { Divider, Flex, Text } from "@chakra-ui/react";
import { IAllGameResult } from "../../../data/AllGame";
import { extractGenresName } from "../../../utils/extractGenresName";

interface IProps {
  game: IAllGameResult | undefined;
}

const rowContainerStyle = {
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "8px",
  marginTop: "8px",
};

const labelStyle = {
  fontSize: "10px",
  color: "#717073",
  fontWeight: 500,
};

const valueStyle = {
  fontSize: "10px",
  fontWeight: 600,
  color: "#ffffff",
};

const dividerStyle = {
  color: "#717073",
};

const HoveredCardExtra = ({ game }: IProps) => {
  return (
    <Flex flexDir={"column"} h={"fit-content"}>
      <Flex style={rowContainerStyle}>
        <Text style={labelStyle}>Release Date:</Text>
        <Text style={valueStyle}>{game?.released}</Text>
      </Flex>
      <Divider style={dividerStyle} />
      <Flex style={rowContainerStyle}>
        <Text style={labelStyle}>Genres:</Text>
        <Text style={valueStyle}>{extractGenresName(game?.genres)}</Text>
      </Flex>
      <Divider style={dividerStyle} />
      <Flex style={rowContainerStyle}>
        <Text style={labelStyle}>Rating Count:</Text>
        <Text style={valueStyle}>{game?.ratings_count}</Text>
      </Flex>
    </Flex>
  );
};

export default HoveredCardExtra;
