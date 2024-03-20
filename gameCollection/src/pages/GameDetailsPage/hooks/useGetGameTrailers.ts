import { useQuery } from "@tanstack/react-query";
import { IGameTrailer } from "../../../data/AllGame";
import ApiClient from "../../../services/apiClient";
import { IFetchResponse } from "../../../data/common";

async function getGameTrailer(id: number) {
  const apiClient = new ApiClient<IGameTrailer>(`/games/${id}/movies`);
  const { data } = await apiClient.get();
  return data;
}

const useGetGameTrailers = (id: number) => {
  const { data, isLoading, error } = useQuery<
    IFetchResponse<IGameTrailer>,
    Error
  >(["game-detail-trailer"], () => getGameTrailer(id));

  return { data, isLoading, error };
};

export default useGetGameTrailers;
