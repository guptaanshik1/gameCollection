import { useQuery } from "@tanstack/react-query";
import { IAllGamesResponse } from "../data/AllGame";
import { IQueryObject } from "../data/common";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<IAllGamesResponse>("/games");

const useAllGamesData = (queryObject: IQueryObject) => {
  const { data, error, isLoading } = useQuery(["games", queryObject], () =>
    apiClient.get({
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
