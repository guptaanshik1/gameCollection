import { IAllGameResult } from "../data/AllGame";
import useData from "./useData";

const useAllGamesData = () => useData<IAllGameResult>("/games");

export default useAllGamesData;
