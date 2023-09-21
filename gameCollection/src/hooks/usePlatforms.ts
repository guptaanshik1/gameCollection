import { useQuery } from "@tanstack/react-query";
import { IPlatforms } from "../data/platform";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<IPlatforms>("/platforms/lists/parents");

export const usePlatforms = () => {
  const { data, error, isLoading } = useQuery(
    ["platforms"],
    () => apiClient.get(),
    {
      staleTime: 24 * 60 * 60 * 1000,
    }
  );

  return { data: data?.data, error, isLoading };
};
