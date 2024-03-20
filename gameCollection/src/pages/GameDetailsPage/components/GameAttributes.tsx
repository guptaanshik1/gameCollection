import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "../../../components/DefinitionItem";
import CriticScore from "../../../components/Games/components/CriticScore";
import { useGameDetailsPageContext } from "../utils/context";

const GameAttributes = () => {
  const { gameData } = useGameDetailsPageContext();

  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {gameData?.parent_platforms?.map(({ platform }) => (
          <Text key={platform?.id}>{platform?.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metacritic">
        <CriticScore score={gameData?.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {gameData?.genres?.map((genre) => (
          <Text key={genre?.id}>{genre?.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {gameData?.publishers?.map((publisher) => (
          <Text key={publisher?.id}>{publisher?.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
