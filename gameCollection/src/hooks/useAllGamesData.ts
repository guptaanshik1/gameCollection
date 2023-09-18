import { IAllGameResult } from "../data/AllGame";
import { IQueryObject } from "../data/common";
import useData from "./useData";

const useAllGamesData = (queryObject: IQueryObject) =>
  useData<IAllGameResult>(
    "/games",
    { params: { genres: queryObject?.genre?.id } },
    [queryObject?.genre?.id]
  );

export default useAllGamesData;
