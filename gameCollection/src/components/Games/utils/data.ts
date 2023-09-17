import { IAllGameResult } from "../../../data/AllGame";

export interface IGameContextData {
  games: IAllGameResult[];
  error: string;
}
