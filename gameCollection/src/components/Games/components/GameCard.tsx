import { Card, Heading, Image } from "@chakra-ui/react";
import { IAllGameResult } from "../../../data/AllGame";

interface IProps {
  game: IAllGameResult;
}

const GameCard = ({ game }: IProps) => {
  return (
    <Card cursor={"pointer"} borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game?.background_image} />
      <Heading fontSize={"24px"}>{game?.name}</Heading>
    </Card>
  );
};

export default GameCard;
