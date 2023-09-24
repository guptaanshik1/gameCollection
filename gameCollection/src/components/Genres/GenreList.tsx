import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useGenres } from "../../hooks/useGenres";
import { getCroppedImageUrl } from "../../utils/getCropppedImageUrl";

interface IProps {
  onSelectedGenre: (genreId?: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectedGenre, selectedGenreId }: IProps) => {
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
    <>
      <Heading as="h1" mb={"10px"}>
        Genres
      </Heading>
      <List>
        {genres?.results?.map((genre) => {
          return (
            <ListItem key={genre?.id} py={"5px"}>
              <HStack gridGap={"10px"}>
                <Image
                  boxSize={"44px"}
                  borderRadius={10}
                  src={getCroppedImageUrl(genre?.image_background)}
                  objectFit={"cover"}
                />
                <Text
                  fontWeight={genre?.id === selectedGenreId ? 700 : 400}
                  cursor={"pointer"}
                  onClick={() => onSelectedGenre(genre?.id)}
                >
                  {genre?.name}
                </Text>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
