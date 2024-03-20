import { useQuery } from "@tanstack/react-query";
import { IGameDetail } from "../../../data/AllGame";
import ApiClient from "../../../services/apiClient";

const apiClient = new ApiClient<IGameDetail>("/games");

async function getGameDetail(slug: string | undefined) {
  if (!slug) return;
  const { data } = await apiClient.getOne(slug);
  return data;
}

const useGetGameDetail = (slug: string | undefined) => {
  const { data, isLoading, error } = useQuery(["game-detail"], () =>
    getGameDetail(slug)
  );

  return { data, isLoading, error };
};

export default useGetGameDetail;
