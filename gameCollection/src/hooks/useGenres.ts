import { useQuery } from "@tanstack/react-query";
import { IGenreResult } from "../data/genre";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<IGenreResult>("/genres");

export const useGenres = () => {
  const { data, isLoading, error } = useQuery(
    ["genres"],
    () => apiClient.get(),
    {
      staleTime: 24 * 60 * 60 * 1000, // 24h
      // initialData: { count: staticData?.length, results: staticData } -> this data is inserted to cache and remains there until staleTime
    }
  );

  return { data: data?.data, isLoading, error };
};
