import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError } from "axios";
import { IFetchResponse } from "../data/common";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<Array<T>>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const { data } = await apiClient.get<IFetchResponse<T>>(endpoint);
        setData(data?.results);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setError((err as AxiosError)?.message);
      }
    };
    fetchGames();
  }, []);

  return { data, setData, error, setError, isLoading };
};

export default useData;
