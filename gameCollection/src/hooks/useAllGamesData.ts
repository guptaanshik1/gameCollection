import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { IAllGameResult, IAllGamesResponse } from "../data/AllGame";
import { AxiosError } from "axios";

const useAllGamesData = () => {
  const [games, setGames] = useState<Array<IAllGameResult>>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const { data } = await apiClient.get<IAllGamesResponse>("/games");
        setGames(data?.results);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setError((err as AxiosError)?.message);
      }
    };
    fetchGames();
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useAllGamesData;
