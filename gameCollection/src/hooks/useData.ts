import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, AxiosRequestConfig } from "axios";
import { IFetchResponse } from "../data/common";

const useData = <T>(
  endpoint: string,
  requestObject?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<Array<T>>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const fetchGames = async () => {
        try {
          setIsLoading(true);
          const { data } = await apiClient.get<IFetchResponse<T>>(endpoint, {
            ...requestObject,
          });
          setData(data?.results);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
          setIsLoading(false);
          setError((err as AxiosError)?.message);
        }
      };
      fetchGames();
    },
    deps ? [...deps] : []
  );

  return { data, setData, error, setError, isLoading };
};

export default useData;
