import { IAllGameResult } from "../data/AllGame";
import { TSelectedGenre } from "../data/common";
import useData from "./useData";

const useAllGamesData = (selectedGenre: TSelectedGenre) =>
  useData<IAllGameResult>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useAllGamesData;
