import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { IAllGameResult, IAllGamesResponse } from "../data/AllGame";
import { AxiosError } from "axios";

const useAllGamesData = () => {
  const [games, setGames] = useState<Array<IAllGameResult>>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await apiClient.get<IAllGamesResponse>("/games");
        setGames(data?.results);
      } catch (err) {
        console.error(err);
        setError((err as AxiosError)?.message);
      }
    };
    fetchGames();
  }, []);

  return { games, setGames, error, setError };
};

export default useAllGamesData;
