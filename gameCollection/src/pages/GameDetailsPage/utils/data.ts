import { IGameDetail, IGameTrailer } from "../../../data/AllGame";
import { IFetchResponse } from "../../../data/common";

export interface IContextData {
  isGameDetailLoading: boolean;
  gameData: IGameDetail | undefined;
  gameTrailerData: IFetchResponse<IGameTrailer> | undefined;
  isGameTrailerLoading: boolean;
  gameTrailerError: Error | null;
}
