import { IPlatforms } from "../data/platform";
import useData from "../hooks/useData";

export const usePlatforms = () =>
  useData<IPlatforms>("/platforms/lists/parents");
