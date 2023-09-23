import { axiosInstance } from "../services/apiClient";
import { IQueryObject } from "../data/common";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IAllGamesResponse } from "../data/AllGame";

async function getGames(
  queryObject: IQueryObject,
  pageParam: number
): Promise<IAllGamesResponse | undefined> {
  const { data } = await axiosInstance.get("/games", {
    params: {
      genres: queryObject?.genre?.id,
      parent_platforms: queryObject?.platform?.id,
      ordering: queryObject?.order,
      search: queryObject?.search,
      page: pageParam,
    },
  });

  return data;
}

export default function useAllGamesData(queryObject: IQueryObject) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["games", queryObject],
    ({ pageParam = 1 }) => getGames(queryObject, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.next ? allPages?.length + 1 : undefined;
      },
    }
  );

  return {
    data,
    error: error as Error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
}
