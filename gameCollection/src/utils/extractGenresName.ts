import { IGenre } from "../data/AllGame";

export const extractGenresName = (
  genres: Array<IGenre> | undefined
): string | undefined => {
  const res = genres?.reduce<Array<string>>((acc, genre) => {
    acc.push(genre?.name);
    return acc;
  }, []);
  return res?.join(", ");
};
