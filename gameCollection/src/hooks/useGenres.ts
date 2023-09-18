import { IGenreResult } from "../data/genre";
import useData from "../hooks/useData";

export const useGenres = () => useData<IGenreResult>("/genres");
