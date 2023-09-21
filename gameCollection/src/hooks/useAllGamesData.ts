import { useQuery } from "@tanstack/react-query";
import { IAllGamesResponse } from "../data/AllGame";
import { IFetchResponse, IQueryObject } from "../data/common";
import apiClient from "../services/apiClient";

const useAllGamesData = (queryObject: IQueryObject) => {
  const { data, error, isLoading } = useQuery(["games", queryObject], () =>
    apiClient.get<IFetchResponse<IAllGamesResponse>>("/games", {
      params: {
        genres: queryObject?.genre?.id,
        parent_platforms: queryObject?.platform?.id,
        ordering: queryObject?.order,
        search: queryObject?.search,
      },
    })
  );
  return { data: data?.data, error: error as Error, isLoading };
};
export default useAllGamesData;
