import { Card, Flex, Heading, Image } from "@chakra-ui/react";
import { IAllGameResult } from "../../../data/AllGame";
import PlatformIconsMap from "./PlatformIconsMap";

interface IProps {
  game: IAllGameResult;
}

const GameCard = ({ game }: IProps) => {
  return (
    <Card
      cursor={"pointer"}
      borderRadius={"10px"}
      overflow={"hidden"}
      key={game?.id}
    >
      <Image src={game?.background_image} />
      <Flex m={"10px"} gridGap={"8px"} flexDir={"column"}>
        <Heading fontSize={"20px"}>{game?.name}</Heading>
        <Flex flexDir={"row"} gridGap={"8px"} flexWrap={"wrap"}>
          {game?.parent_platforms?.map((parentPlatform) => {
            return (
              <PlatformIconsMap
                key={parentPlatform?.platform?.id}
                parentPlatform={parentPlatform}
              />
            );
          })}
        </Flex>
      </Flex>
    </Card>
  );
};

export default GameCard;
