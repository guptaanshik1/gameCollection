import { Image, SimpleGrid } from "@chakra-ui/react";
import { useGameDetailsPageContext } from "../utils/context";

const GameScreenshots = () => {
  const { screenshotData, screenshotError } = useGameDetailsPageContext();
  console.log({ screenshotData });

  if (screenshotError) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gridGap={"10px"}>
      {screenshotData?.results?.map((shot) => {
        return (
          <Image
            src={shot?.image}
            h={shot?.height}
            w={shot?.width}
            objectFit={"cover"}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default GameScreenshots;
