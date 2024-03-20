import { useQuery } from "@tanstack/react-query";
import { IGameScreenshot } from "../../../data/AllGame";
import ApiClient from "../../../services/apiClient";
import { IFetchResponse } from "../../../data/common";

const getGameScreenshots = async (gamePk: number) => {
  const apiClient = new ApiClient<IGameScreenshot>(
    `/games/${gamePk}/screenshots`
  );
  const { data } = await apiClient.get();
  return data;
};

const useGetGameScreenshots = (gamePk: number) => {
  const { data, error, isLoading } = useQuery<
    IFetchResponse<IGameScreenshot>,
    Error
  >(["game-detail-screenshots"], () => getGameScreenshots(gamePk));
  return { data, error, isLoading };
};

export default useGetGameScreenshots;
