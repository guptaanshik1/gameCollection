import { Card, CardBody, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import { IAllGameResult } from "../../../data/AllGame";
import PlatformIconsMap from "./PlatformIconsMap";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../../../utils/getCropppedImageUrl";

interface IProps {
  game: IAllGameResult;
}

const GameCard = ({ game }: IProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game?.background_image)} />

      <CardBody>
        <Heading fontSize={"20px"} cursor={"pointer"}>
          {game?.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <Flex gridGap={"10px"} mt={"10px"} flexWrap={"wrap"}>
            {game?.parent_platforms?.map((parentPlatform) => {
              return (
                <PlatformIconsMap
                  key={parentPlatform?.platform?.id}
                  parentPlatform={parentPlatform}
                />
              );
            })}
          </Flex>
          <CriticScore score={game?.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
