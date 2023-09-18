import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useGenres } from "../../hooks/useGenres";
import { getCroppedImageUrl } from "../../utils/getCropppedImageUrl";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (isLoading) {
    return (
      <List>
        {skeletons.map((skeleton) => {
          return <SkeletonText key={skeleton} p={"10px"} />;
        })}
      </List>
    );
  }

  return (
    <List>
      {genres?.map((genre) => {
        return (
          <ListItem key={genre?.id} py={"5px"}>
            <HStack gridGap={"10px"}>
              <Image
                boxSize={"44px"}
                borderRadius={10}
                src={getCroppedImageUrl(genre?.image_background)}
                objectFit={"cover"}
              />
              <Text cursor={"pointer"}>{genre?.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
