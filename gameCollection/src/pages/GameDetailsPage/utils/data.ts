import { IGameDetail } from "../../../data/AllGame";

export interface IContextData {
  isGameDetailLoading: boolean;
  gameData: IGameDetail | undefined;
}
