import meh from "../../../assets/meh.webp";
import bullsEye from "../../../assets/bulls-eye.webp";
import thumbsUp from "../../../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface IProps {
  rating: number;
}

const GameEmojis = ({ rating }: IProps) => {
  if (rating < 3) return null;
  const emojiRatingMapper: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "mehEmoji", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbsUpEmoji", boxSize: "25px" },
    5: { src: bullsEye, alt: "bullsEyeEmoji", boxSize: "35px" },
  };

  return <Image {...emojiRatingMapper[rating]} />;
};

export default GameEmojis;
