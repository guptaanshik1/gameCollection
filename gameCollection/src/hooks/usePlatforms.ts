import { useQuery } from "@tanstack/react-query";
import { IPlatforms } from "../data/platform";
import apiClient from "../services/apiClient";
import { IFetchResponse } from "../data/common";

export const usePlatforms = () => {
  const { data, error, isLoading } = useQuery(
    ["platforms"],
    () => apiClient.get<IFetchResponse<IPlatforms>>("/platforms/lists/parents"),
    {
      staleTime: 24 * 60 * 60 * 1000,
    }
  );

  return { data: data?.data, error, isLoading };
};
// "/platforms/lists/parents"
