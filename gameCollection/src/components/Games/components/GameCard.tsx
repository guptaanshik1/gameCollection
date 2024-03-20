import { Card, CardBody, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import { IAllGameResult } from "../../../data/AllGame";
import PlatformIconsMap from "./PlatformIconsMap";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../../../utils/getCropppedImageUrl";
import GameEmojis from "./GameEmojis";
import HoveredCardExtra from "./HoveredCardExtra";
import { useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  game: IAllGameResult | undefined;
}

const GameCard = ({ game }: IProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsCardHovered(true)}
      onMouseOut={() => setIsCardHovered(false)}
    >
      <Image src={getCroppedImageUrl(game?.background_image)} />

      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Flex gridGap={"10px"} mt={"10px"} flexWrap={"wrap"} mb={"10px"}>
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
        <Flex alignItems={"center"} gridGap={"8px"}>
          <Link to={`/games/${game?.slug}`}>
            <Heading fontSize={"20px"} cursor={"pointer"} mb={"10px"}>
              {game?.name}
            </Heading>
          </Link>
          <GameEmojis rating={game?.rating_top} />
        </Flex>
        {isCardHovered && <HoveredCardExtra game={game} />}
      </CardBody>
    </Card>
  );
};

export default GameCard;
