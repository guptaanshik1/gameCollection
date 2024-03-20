import {
  IGameDetail,
  IGameScreenshot,
  IGameTrailer,
} from "../../../data/AllGame";
import { IFetchResponse } from "../../../data/common";

export interface IContextData {
  isGameDetailLoading: boolean;
  gameData: IGameDetail | undefined;
  gameTrailerData: IFetchResponse<IGameTrailer> | undefined;
  isGameTrailerLoading: boolean;
  gameTrailerError: Error | null;
  screenshotData: IFetchResponse<IGameScreenshot> | undefined;
  screenshotError: Error | null;
  isScreenshotLoading: boolean;
}
