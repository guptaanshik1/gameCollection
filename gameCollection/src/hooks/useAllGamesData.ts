import { axiosInstance } from "../services/apiClient";
import { IQueryObject } from "../data/common";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IAllGamesResponse } from "../data/AllGame";
import useQueryStore from "../app/useQueryStore";

async function getGames(
  queryObject: IQueryObject,
  pageParam: number
): Promise<IAllGamesResponse | undefined> {
  const { data } = await axiosInstance.get("/games", {
    params: {
      genres: queryObject?.genreId,
      parent_platforms: queryObject?.platformId,
      ordering: queryObject?.order,
      search: queryObject?.search,
      page: pageParam,
    },
  });

  return data;
}

export default function useAllGamesData() {
  const queryObject = useQueryStore((state) => state.queryObject);
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
